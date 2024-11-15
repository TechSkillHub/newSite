import { defineEventHandler, getQuery, sendRedirect } from 'h3';
import axios from 'axios';
import { findUserByEmail, createUser } from '~/server/utils/authSocial';
import { generateToken } from '~/server/utils/jwt';
import { OAuthProviderData, AuthResponse } from '~/utils/types/OAuthTypes';


export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  const tokenResponse = await axios.get(`https://graph.facebook.com/v11.0/oauth/access_token`, {
    params: {
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: `${process.env.BASE_URL}${process.env.FACEBOOK_REDIRECT_URI}`,
      code,
    },
  });

  const { access_token } = tokenResponse.data as AuthResponse;

  const userInfoResponse = await axios.get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${access_token}`);
  const userInfo = userInfoResponse.data;

  const email = userInfo.email;
  const name = userInfo.name;

  let user = await findUserByEmail(email);

  if (!user) {
    user = await createUser({
      email,
      name,
      provider: 'facebook',
      isOAuth: true,
      password: null,
    });
  }

  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, '1h');

  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

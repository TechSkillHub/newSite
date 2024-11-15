import { defineEventHandler, getQuery, sendRedirect } from 'h3';
import axios from 'axios';
import { findUserByEmail, createUser } from '~/server/utils/authSocial';
import { generateToken } from '~/server/utils/jwt';


export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  const tokenResponse = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&redirect_uri=${process.env.BASE_URL}/api/auth/callback/linkedin&client_id=77zcfgc0nm85sj&client_secret=WPL_AP1.Srwr3fmv7X8RIYaX.twvaww==&code=${code}`);
  
  const { access_token } = tokenResponse.data;

  const userInfoResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {  
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const email = userInfoResponse.data.email;
  const name = userInfoResponse.data.name;

  let user = await findUserByEmail(email);

  if (!user) {
    user = await createUser({
      email,
      name,
      provider: 'linkedin',
      isOAuth: true,
      password: null,
    });
  }

  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, '1h');

  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

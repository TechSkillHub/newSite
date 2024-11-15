import { OAuth2Client } from 'google-auth-library';
import { prisma } from '~/server/db';
import { generateToken } from '~/server/utils/jwt';
import { OAuthProviderData, AuthResponse } from '~/utils/types/OAuthTypes';

interface GoogleAuthResponse extends AuthResponse {
  id_token: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string;
  
  const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  const tokenResponse = await client.getToken({
    code,
    redirect_uri: `${process.env.BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`,
  });

  const tokens = tokenResponse.tokens as GoogleAuthResponse;

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token!,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error('Falha ao obter dados do Google');
  }

  const email = payload.email as string;
  const name = payload.name as string;

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        provider: 'google',
        isOAuth: true,
        password: null,
      },
    });
  }

  console.log('user', user);
  

  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, '1h');

  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

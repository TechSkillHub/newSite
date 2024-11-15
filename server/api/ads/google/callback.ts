import { defineEventHandler, sendRedirect } from 'h3';
import { OAuth2Client } from 'google-auth-library';
import { prisma } from '~/server/db';

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event)
  const userId = cookies.userId;
  const { code } = getQuery(event);

  // Não há necessidade de autenticar o usuário aqui
  const client = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET,
    `${process.env.BASE_URL}${process.env.GOOGLE_ADS_REDIRECT_URI}`
  );

  const { tokens } = await client.getToken(code as string);

  const existingToken = await prisma.token.findFirst({ where: { userId } });

  if (existingToken) {
    await prisma.token.update({
      where: { id: existingToken.id },
      data: {
        accessToken: tokens.access_token!,
        refreshToken: tokens.refresh_token!,
        expiresIn: new Date(tokens.expiry_date!),
      },
    });
  } else {
    await prisma.token.create({
      data: {
        userId,
        accessToken: tokens.access_token!,
        refreshToken: tokens.refresh_token!,
        expiresIn: new Date(tokens.expiry_date!),
      },
    });
  }

  return sendRedirect(event, '/dashboard');
});

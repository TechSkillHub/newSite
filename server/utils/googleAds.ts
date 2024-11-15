import { OAuth2Client } from 'google-auth-library';
import { prisma } from '~/server/db';

export async function refreshGoogleAdsToken(userId: string) {
  const token = await prisma.token.findFirst({
    where: { userId },
  });

  if (!token || !token.refreshToken) {
    throw new Error('Refresh token não encontrado');
  }

  const client = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET
  );

  // Solicita um novo conjunto de tokens
  client.setCredentials({ refresh_token: token.refreshToken });
  const { credentials } = await client.refreshAccessToken();

  await prisma.token.update({
    where: { id: token.id },
    data: {
      accessToken: credentials.access_token!,
      refreshToken: credentials.refresh_token || token.refreshToken,
      expiresIn: new Date(credentials.expiry_date!),
    },
  });

  return credentials.access_token;
}

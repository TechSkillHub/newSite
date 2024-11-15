import { defineEventHandler, sendRedirect } from 'h3';
import { OAuth2Client } from 'google-auth-library';

export default defineEventHandler(async (event) => {
  const client = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET,
    `${process.env.BASE_URL}${process.env.GOOGLE_ADS_REDIRECT_URI}`
  );

  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/adwords',
    ],
  });

  return sendRedirect(event, authUrl);
});

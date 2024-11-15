import { OAuth2Client } from 'google-auth-library';
import { defineEventHandler } from 'h3';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

export default defineEventHandler(async (event) => {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
    redirect_uri: `${process.env.BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`,
  });

  return sendRedirect(event, url);
});

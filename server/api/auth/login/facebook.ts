import { defineEventHandler, sendRedirect } from 'h3';

export default defineEventHandler(async (event) => {
  const facebookLoginUrl = `https://www.facebook.com/v11.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${process.env.BASE_URL}${process.env.FACEBOOK_REDIRECT_URI}&state={st=state123abc,ds=123456789}&scope=email,public_profile`;

  return sendRedirect(event, facebookLoginUrl);
});

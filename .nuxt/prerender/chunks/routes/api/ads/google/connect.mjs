import { defineEventHandler, sendRedirect } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import { OAuth2Client } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/google-auth-library/build/src/index.js';

const connect = defineEventHandler(async (event) => {
  const client = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET,
    `${process.env.BASE_URL}${process.env.GOOGLE_ADS_REDIRECT_URI}`
  );
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/adwords"
    ]
  });
  return sendRedirect(event, authUrl);
});

export { connect as default };
//# sourceMappingURL=connect.mjs.map

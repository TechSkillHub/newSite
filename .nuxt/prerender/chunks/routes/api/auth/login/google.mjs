import { defineEventHandler, sendRedirect } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import { OAuth2Client } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/google-auth-library/build/src/index.js';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
const google = defineEventHandler(async (event) => {
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    redirect_uri: `${process.env.BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`
  });
  return sendRedirect(event, url);
});

export { google as default };
//# sourceMappingURL=google.mjs.map

import { defineEventHandler, sendRedirect } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';

const linkedin = defineEventHandler(async (event) => {
  const linkedinLoginUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.BASE_URL}${process.env.LINKEDIN_REDIRECT_URI}&scope=openid%20profile%20email`;
  return sendRedirect(event, linkedinLoginUrl);
});

export { linkedin as default };
//# sourceMappingURL=linkedin.mjs.map

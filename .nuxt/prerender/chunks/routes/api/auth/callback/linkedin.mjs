import { defineEventHandler, getQuery, sendRedirect } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import axios from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/axios/index.js';
import { f as findUserByEmail, c as createUser, a as generateToken } from '../../../../_/nitro.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unified/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-parse/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-rehype/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-gfm/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-raw/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/detab/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/github-slugger/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/mailersend/lib/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@prisma/client/default.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/radix3/dist/index.mjs';

const linkedin = defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const tokenResponse = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&redirect_uri=${process.env.BASE_URL}/api/auth/callback/linkedin&client_id=77zcfgc0nm85sj&client_secret=WPL_AP1.Srwr3fmv7X8RIYaX.twvaww==&code=${code}`);
  const { access_token } = tokenResponse.data;
  const userInfoResponse = await axios.get("https://api.linkedin.com/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  const email = userInfoResponse.data.email;
  const name = userInfoResponse.data.name;
  let user = await findUserByEmail(email);
  if (!user) {
    user = await createUser({
      email,
      name,
      provider: "linkedin",
      isOAuth: true,
      password: null
    });
  }
  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, "1h");
  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

export { linkedin as default };
//# sourceMappingURL=linkedin.mjs.map

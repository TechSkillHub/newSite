import { defineEventHandler, parseCookies, getQuery, sendRedirect } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import { OAuth2Client } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/google-auth-library/build/src/index.js';
import { p as prisma } from '../../../../_/nitro.mjs';
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

const callback = defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);
    const userId = parseInt(cookies.userId);
    const { code } = getQuery(event);
    const client = new OAuth2Client(
      process.env.GOOGLE_ADS_CLIENT_ID,
      process.env.GOOGLE_ADS_CLIENT_SECRET,
      `${process.env.BASE_URL}${process.env.GOOGLE_ADS_REDIRECT_URI}`
    );
    const { tokens } = await client.getToken(code);
    const existingToken = await prisma.token.findFirst({ where: { userId } });
    if (existingToken) {
      await prisma.token.update({
        where: { id: existingToken.id },
        data: {
          accessToken: tokens.access_token,
          //refreshToken: tokens.refresh_token!,
          expiresIn: new Date(tokens.expiry_date)
        }
      });
    } else {
      let data = {
        userId,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || "",
        expiresIn: new Date(tokens.expiry_date)
      };
      await prisma.token.create({
        data
      });
    }
    return sendRedirect(event, "/dashboard");
  } catch (error) {
    console.log(error);
    return sendRedirect(event, "/dashboard/ads-reports");
  }
});

export { callback as default };
//# sourceMappingURL=callback.mjs.map

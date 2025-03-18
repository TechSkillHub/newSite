import { defineEventHandler } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import { g as getUserSession, p as prisma } from '../../../../_/nitro.mjs';
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
import 'node:fs';
import 'node:url';
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

const index = defineEventHandler(async (event) => {
  try {
    const userToken = await getUserSession(event);
    const user = await prisma.user.findUnique({
      where: {
        id: userToken.id
      }
    });
    const report = await prisma.report.findFirst({
      where: {
        companyId: user == null ? void 0 : user.companyId
      }
    });
    const rows = await prisma.reportRow.findMany({
      where: {
        reportId: report == null ? void 0 : report.id
      }
    });
    return {
      report,
      rows
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map

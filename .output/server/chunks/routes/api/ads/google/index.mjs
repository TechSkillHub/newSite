import { c as defineEventHandler, h as getUserSession, e as prisma } from '../../../../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'mailersend';
import 'jsonwebtoken';
import '@prisma/client';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

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

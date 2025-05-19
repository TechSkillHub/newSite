import { c as defineEventHandler, h as getUserSession, j as createError, e as prisma } from '../../../../_/nitro.mjs';
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

const status = defineEventHandler(async (event) => {
  const user = await getUserSession(event);
  if (!user) return createError({
    statusCode: 401
  });
  const token = await prisma.token.findFirst({ where: { userId: user.id } });
  return { isConnected: !!(token == null ? void 0 : token.accessToken) };
});

export { status as default };
//# sourceMappingURL=status.mjs.map

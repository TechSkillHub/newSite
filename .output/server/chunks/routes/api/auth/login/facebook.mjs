import { c as defineEventHandler, f as sendRedirect } from '../../../../_/nitro.mjs';
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

const facebook = defineEventHandler(async (event) => {
  const facebookLoginUrl = `https://www.facebook.com/v11.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${process.env.BASE_URL}${process.env.FACEBOOK_REDIRECT_URI}&state={st=state123abc,ds=123456789}&scope=email,public_profile`;
  return sendRedirect(event, facebookLoginUrl);
});

export { facebook as default };
//# sourceMappingURL=facebook.mjs.map

import { c as defineEventHandler, f as sendRedirect } from '../../../../_/nitro.mjs';
import { OAuth2Client } from 'google-auth-library';
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
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

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

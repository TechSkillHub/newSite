import { c as defineEventHandler, p as parseCookies, g as getQuery, e as prisma, f as sendRedirect } from '../../../../_/nitro.mjs';
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
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

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

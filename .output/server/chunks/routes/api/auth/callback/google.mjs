import { c as defineEventHandler, g as getQuery, e as prisma, m as generateToken, f as sendRedirect } from '../../../../_/nitro.mjs';
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

const google = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code;
  const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  const tokenResponse = await client.getToken({
    code,
    redirect_uri: `${process.env.BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`
  });
  const tokens = tokenResponse.tokens;
  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID
  });
  const payload = ticket.getPayload();
  if (!payload) {
    throw new Error("Falha ao obter dados do Google");
  }
  const email = payload.email;
  const name = payload.name;
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        provider: "google",
        isOAuth: true,
        password: null
      }
    });
  }
  console.log("user", user);
  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, "1h");
  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

export { google as default };
//# sourceMappingURL=google.mjs.map

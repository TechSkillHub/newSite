import { c as defineEventHandler, g as getQuery, k as findUserByEmail, l as createUser, m as generateToken, f as sendRedirect } from '../../../../_/nitro.mjs';
import axios from 'axios';
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

const facebook = defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const tokenResponse = await axios.get(`https://graph.facebook.com/v11.0/oauth/access_token`, {
    params: {
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: `${process.env.BASE_URL}${process.env.FACEBOOK_REDIRECT_URI}`,
      code
    }
  });
  const { access_token } = tokenResponse.data;
  const userInfoResponse = await axios.get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${access_token}`);
  const userInfo = userInfoResponse.data;
  const email = userInfo.email;
  const name = userInfo.name;
  let user = await findUserByEmail(email);
  if (!user) {
    user = await createUser({
      email,
      name,
      provider: "facebook",
      isOAuth: true,
      password: null
    });
  }
  const jwtToken = generateToken({ id: user.id, email: user.email, role: user.role, name: user.name }, "1h");
  return sendRedirect(event, `/auth/callback?token=${jwtToken}&user=${JSON.stringify(user)}`);
});

export { facebook as default };
//# sourceMappingURL=facebook.mjs.map

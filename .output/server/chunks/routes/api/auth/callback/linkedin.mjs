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
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

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

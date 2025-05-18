import { c as defineEventHandler, i as readBody, e as prisma, j as createError } from '../../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
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
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const login_post = defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  const user = await prisma.user.findUnique({ where: { email } });
  if (user == null ? void 0 : user.isOAuth) {
    return createError({
      statusCode: 429,
      statusMessage: `This email is already being used with a ${user.provider} account.`
    });
  }
  if (!user || !await bcrypt.compare(password, user.password)) {
    return createError({
      statusCode: 401
    });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1h" }
  );
  return {
    success: true,
    message: "Login efetuado com sucesso.",
    data: {
      token
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map

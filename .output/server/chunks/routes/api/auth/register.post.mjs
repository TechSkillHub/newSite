import { c as defineEventHandler, i as readBody, j as createError } from '../../../_/nitro.mjs';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
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
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const register_post = defineEventHandler(async (event) => {
  const { name, email, password, companyId } = await readBody(event);
  const userExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (userExist && (userExist == null ? void 0 : userExist.isOAuth)) {
    return createError({
      statusCode: 429,
      statusMessage: `This email is already being used with a ${userExist.provider} account.`
    });
  }
  if (userExist) {
    return createError({
      status: 409
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      provider: "internal",
      companyId
    }
  });
  return {
    title: "User registered successfully!",
    message: "Make login to access your account."
  };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map

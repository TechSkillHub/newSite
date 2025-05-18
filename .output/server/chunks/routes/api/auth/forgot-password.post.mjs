import { c as defineEventHandler, i as readBody, e as prisma, j as createError, m as generateToken, n as sendPasswordResetEmail } from '../../../_/nitro.mjs';
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

const forgotPassword_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if (!user || user.provider) {
    throw createError({
      statusCode: 429,
      statusMessage: "User not found or registered via social networks."
    });
  }
  const token = generateToken({ userId: user.id }, "1h");
  const resetLink = `${process.env.BASE_URL}/auth/reset-password?token=${token}`;
  await sendPasswordResetEmail(user.email, resetLink);
  return { message: "Password reset email sent successfully!" };
});

export { forgotPassword_post as default };
//# sourceMappingURL=forgot-password.post.mjs.map

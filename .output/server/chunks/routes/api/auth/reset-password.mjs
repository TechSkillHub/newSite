import { c as defineEventHandler, i as readBody, v as verifyToken, e as prisma, j as createError } from '../../../_/nitro.mjs';
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
import 'jsonwebtoken';
import '@prisma/client';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

const resetPassword = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const { token, newPassword } = body;
    const decoded = verifyToken(token);
    if (typeof decoded === "string") {
      throw new Error("Invalid token");
    }
    const userId = decoded == null ? void 0 : decoded.userId;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword }
    });
    return { success: true, message: "Password reset successfully!" };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 500, message: "Error when resetting password: " + error.message });
    } else {
      throw { statusCode: 498, success: false, message: "Unknown error when resetting password" };
    }
  }
});

export { resetPassword as default };
//# sourceMappingURL=reset-password.mjs.map

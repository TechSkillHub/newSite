import { defineEventHandler, readBody, createError } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import bcrypt from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/bcryptjs/index.js';
import { PrismaClient } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@prisma/client/default.js';

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

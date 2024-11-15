import { defineEventHandler, readBody } from 'h3';
import { prisma } from '~/server/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  const user = await prisma.user.findUnique({ where: { email } });

  if(user?.isOAuth) {
    return createError({
      statusCode: 429,
      statusMessage: `This email is already being used with a ${user.provider} account.`
    })
  }

  if (!user || !(await bcrypt.compare(password, user.password as string))) {
    return createError({ 
      statusCode: 401, 
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  );


  return {
    token,
    user: { name: user.name, email: user.email, role: user.role }
  };
});

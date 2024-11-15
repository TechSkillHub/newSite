import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event);

  const userExist = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  
  if(userExist && userExist?.isOAuth) {
    return createError({
      statusCode: 429,
      statusMessage: `This email is already being used with a ${userExist.provider} account.`
    })
  }
  
  if(userExist) {
    return createError({
      status: 409
    })
  }


  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { 
    title: 'User registered successfully!',
    message: 'Make login to access your account.'
  };
});

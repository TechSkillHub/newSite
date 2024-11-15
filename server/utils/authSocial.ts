import { prisma } from '~/server/db';

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = async (userData: { name: string; email: string; provider: string; isOAuth: boolean; password: null; }) => {
  return await prisma.user.create({
    data: userData,
  });
};
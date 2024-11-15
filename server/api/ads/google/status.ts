import { defineEventHandler } from 'h3';
import { prisma } from '~/server/db';
import { getUserSession } from '~/server/utils/session';

export default defineEventHandler(async (event) => {
  const user = await getUserSession(event);
  if (!user) return createError({ 
    statusCode: 401, 
  });;

  const token = await prisma.token.findFirst({ where: { userId: user.id } });
  return { isConnected: !!token?.accessToken };
});

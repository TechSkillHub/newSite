import { verifyToken } from '~/server/utils/jwt';
import { prisma } from '~/server/db'; 
import bcrypt from 'bcryptjs';


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const { token, newPassword } = body;

    const decoded = verifyToken(token);
    
    if (typeof decoded === 'string') {
      throw new Error('Invalid token');
    }
    const userId = decoded?.userId;
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword }, 
    });

    return { success: true, message: 'Password reset successfully!' };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 500, message: 'Error when resetting password: ' + error.message });
    } else {
      throw { statusCode: 498, success: false, message: 'Unknown error when resetting password' };
    }
  }
});

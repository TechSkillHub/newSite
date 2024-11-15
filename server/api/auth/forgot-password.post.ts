import { prisma } from '~/server/db';
import { sendPasswordResetEmail } from '~/server/utils/mailerSend';
import { generateToken } from '~/server/utils/jwt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.provider) {
    throw createError({
      statusCode: 429,
      statusMessage: 'User not found or registered via social networks.',
    });
  }

  const token = generateToken({ userId: user.id }, '1h');

  const resetLink = `${process.env.BASE_URL}/auth/reset-password?token=${token}`;
  await sendPasswordResetEmail(user.email, resetLink);

  return { message: 'Password reset email sent successfully!' };
});

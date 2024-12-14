import { prisma } from '~/server/db';
import { getUserSession } from '~/server/utils/session';

export default defineEventHandler(async (event) => {
  try{
    const userToken = await getUserSession(event);

    const user = await prisma.user.findUnique({
      where: {
        id: userToken.id
      }
    })

    const report = await prisma.report.findFirst({
        where: {
          companyId: user?.companyId,
        },
      })
    const rows = await prisma.reportRow.findMany({
        where: {
          reportId: report?.id
        }
    })
    return {
        report,
        rows
    };
  }catch(error: any){
    return {success: false, message: error.message}
  }
});

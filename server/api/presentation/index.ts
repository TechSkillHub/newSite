import { prisma } from '~/server/db';
import { getUserSession } from '~/server/utils/session';

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const company = await prisma.company.findFirst({
        where: {
            id: parseInt(query?.id),
        },
      })

    const result = await prisma.$queryRaw`
    select 
        s.name as 'ServiceName',
        sc.value,
        sc.description,
        sc.validity,
        sc.paymentFrequency
    from ServiceCompany sc
    inner join Company c 
        on c.id = sc.companyId 
    inner join Service s 
        on s.id = sc.serviceId 
    where sc.companyId = ${company!.id}
    `;
    return {
        CompanyName: company!.name,
        Services: result};
});

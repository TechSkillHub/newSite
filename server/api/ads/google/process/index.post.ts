import { prisma } from '~/server/db';

export interface Row {
  reportId: number;
  key: string;
  value: string;
}

export default defineEventHandler(async (event) => {
  try {
    // Obtenha o arquivo enviado no corpo da requisição

    const body = await readBody(event);
    const data = body.data;
    const companyId = body.companyId;
    
    if (!data) {
      throw new Error('No XML data provided.');
    }

    // Extraia os dados do JSON
    const reportName = data.report['report-name'];
    const dateRange = data.report['date-range'];
    const rows = data.report.table.row;

    // Salve o relatório no banco de dados
    const report = await prisma.report.create({
      data: {
        reportName,
        dateRange,
        companyId
      },
    });

    rows.cell.map( async(row: Row) => {
      console.log(row);
      await prisma.reportRow.create({
        data: {
          reportId: report.id,
          key: row.key,
          value: row.value
        },
      });
    })
    

    return { success: true, report };
  } catch (error: any) {
    console.error('Error processing XML:', error);
    return { success: false, error: error.message };
  }
});

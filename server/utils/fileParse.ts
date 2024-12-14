import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para processar o XML e armazenar no banco
async function processXml(filePath: string) {
  try {
    // Leia o arquivo XML
    const xmlData = fs.readFileSync(filePath, 'utf-8');

    // Converta o XML para um objeto JSON
    const result = await parseStringPromise(xmlData);

    // Extraia os dados do JSON
    const reportName = result.report['report-name'][0];
    const dateRange = result.report['date-range'][0];
    const rows = result.report.table[0].row;

    // Crie o registro do relatório no banco
    const report = await prisma.report.create({
      data: {
        reportName,
        dateRange,
        rows: rows.map((row: any) => {
          return row.cell.map((cell: any) => ({
            key: cell.key[0],
            value: cell.value[0],
          }));
        }).flat(),
      },
    });

    console.log('Report successfully saved:', report);
  } catch (error) {
    console.error('Error processing XML:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Chame a função com o caminho do arquivo XML
processXml('path/to/your-file.xml');

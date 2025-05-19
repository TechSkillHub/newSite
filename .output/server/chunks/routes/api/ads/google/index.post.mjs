import { c as defineEventHandler, i as readBody, e as prisma } from '../../../../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'mailersend';
import 'jsonwebtoken';
import '@prisma/client';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = body.data;
    const companyId = body.companyId;
    if (!data) {
      throw new Error("No XML data provided.");
    }
    const reportName = data.report["report-name"];
    const dateRange = data.report["date-range"];
    const rows = data.report.table.row;
    const report = await prisma.report.create({
      data: {
        reportName,
        dateRange,
        companyId
      }
    });
    rows.cell.map(async (row) => {
      console.log(row);
      await prisma.reportRow.create({
        data: {
          reportId: report.id,
          key: row.key,
          value: row.value
        }
      });
    });
    return { success: true, report };
  } catch (error) {
    console.error("Error processing XML:", error);
    return { success: false, error: error.message };
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map

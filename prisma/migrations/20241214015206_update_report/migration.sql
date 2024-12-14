-- AlterTable
ALTER TABLE `Report` ADD COLUMN `companyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

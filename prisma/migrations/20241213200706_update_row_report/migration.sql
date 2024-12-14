/*
  Warnings:

  - You are about to drop the `Row` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Row` DROP FOREIGN KEY `Row_reportId_fkey`;

-- DropTable
DROP TABLE `Row`;

-- CreateTable
CREATE TABLE `ReportRow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportId` INTEGER NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReportRow` ADD CONSTRAINT `ReportRow_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

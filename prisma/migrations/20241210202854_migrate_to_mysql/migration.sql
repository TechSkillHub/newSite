-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `provider` VARCHAR(191) NULL,
    `isOAuth` BOOLEAN NOT NULL DEFAULT false,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `avatar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accessToken` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NOT NULL,
    `expiresIn` DATETIME(3) NOT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Report` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportName` VARCHAR(191) NOT NULL,
    `dateRange` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Row` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportId` INTEGER NULL,
    `statusDaCampanha` VARCHAR(191) NOT NULL,
    `campanha` VARCHAR(191) NOT NULL,
    `nomeDoOrcamento` VARCHAR(191) NOT NULL,
    `codigoDaMoeda` VARCHAR(191) NOT NULL,
    `orcamento` DOUBLE NOT NULL,
    `tipoDeOrcamento` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `motivosDoStatus` VARCHAR(191) NOT NULL,
    `pontuacaoDeOtimizacao` DOUBLE NOT NULL,
    `tipoDeCampanha` VARCHAR(191) NOT NULL,
    `impressoes` INTEGER NOT NULL,
    `ctr` VARCHAR(191) NOT NULL,
    `custo` DOUBLE NOT NULL,
    `tipoDeEstrategiaDeLances` VARCHAR(191) NOT NULL,
    `cliques` INTEGER NOT NULL,
    `taxaDeConversao` VARCHAR(191) NOT NULL,
    `conversoes` VARCHAR(191) NOT NULL,
    `cpcMedio` DOUBLE NOT NULL,
    `custoPorConversao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Row` ADD CONSTRAINT `Row_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

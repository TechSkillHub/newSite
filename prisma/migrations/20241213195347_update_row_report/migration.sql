/*
  Warnings:

  - You are about to drop the column `campanha` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `cliques` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `codigoDaMoeda` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `conversoes` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `cpcMedio` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `ctr` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `custo` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `custoPorConversao` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `impressoes` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `motivosDoStatus` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `nomeDoOrcamento` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `orcamento` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `pontuacaoDeOtimizacao` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `statusDaCampanha` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `taxaDeConversao` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDeCampanha` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDeEstrategiaDeLances` on the `Row` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDeOrcamento` on the `Row` table. All the data in the column will be lost.
  - Added the required column `key` to the `Row` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Row` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Row` DROP COLUMN `campanha`,
    DROP COLUMN `cliques`,
    DROP COLUMN `codigoDaMoeda`,
    DROP COLUMN `conversoes`,
    DROP COLUMN `cpcMedio`,
    DROP COLUMN `ctr`,
    DROP COLUMN `custo`,
    DROP COLUMN `custoPorConversao`,
    DROP COLUMN `impressoes`,
    DROP COLUMN `motivosDoStatus`,
    DROP COLUMN `nomeDoOrcamento`,
    DROP COLUMN `orcamento`,
    DROP COLUMN `pontuacaoDeOtimizacao`,
    DROP COLUMN `status`,
    DROP COLUMN `statusDaCampanha`,
    DROP COLUMN `taxaDeConversao`,
    DROP COLUMN `tipoDeCampanha`,
    DROP COLUMN `tipoDeEstrategiaDeLances`,
    DROP COLUMN `tipoDeOrcamento`,
    ADD COLUMN `key` VARCHAR(191) NOT NULL,
    ADD COLUMN `value` VARCHAR(191) NOT NULL;

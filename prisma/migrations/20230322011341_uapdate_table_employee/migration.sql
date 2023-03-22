/*
  Warnings:

  - You are about to alter the column `cpf` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "cpf" SET DATA TYPE INTEGER;

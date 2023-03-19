/*
  Warnings:

  - You are about to drop the column `fature_id` on the `productFactures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "productFactures" DROP CONSTRAINT "productFactures_fature_id_fkey";

-- AlterTable
ALTER TABLE "productFactures" DROP COLUMN "fature_id",
ADD COLUMN     "facture_id" INTEGER;

-- AddForeignKey
ALTER TABLE "productFactures" ADD CONSTRAINT "productFactures_facture_id_fkey" FOREIGN KEY ("facture_id") REFERENCES "factures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

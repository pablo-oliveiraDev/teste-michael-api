/*
  Warnings:

  - You are about to drop the column `facture_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_facture_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "facture_id";

-- CreateTable
CREATE TABLE "ProducFacture" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "product_id" INTEGER,
    "fature_id" INTEGER,

    CONSTRAINT "ProducFacture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProducFacture" ADD CONSTRAINT "ProducFacture_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProducFacture" ADD CONSTRAINT "ProducFacture_fature_id_fkey" FOREIGN KEY ("fature_id") REFERENCES "factures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

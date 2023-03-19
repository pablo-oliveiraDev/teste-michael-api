/*
  Warnings:

  - You are about to drop the `ProducFacture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProducFacture" DROP CONSTRAINT "ProducFacture_fature_id_fkey";

-- DropForeignKey
ALTER TABLE "ProducFacture" DROP CONSTRAINT "ProducFacture_product_id_fkey";

-- DropTable
DROP TABLE "ProducFacture";

-- CreateTable
CREATE TABLE "productFactures" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "product_id" INTEGER,
    "fature_id" INTEGER,

    CONSTRAINT "productFactures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productFactures" ADD CONSTRAINT "productFactures_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productFactures" ADD CONSTRAINT "productFactures_fature_id_fkey" FOREIGN KEY ("fature_id") REFERENCES "factures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `gtin_cean` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codCean]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codCean` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "products_gtin_cean_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "gtin_cean",
ADD COLUMN     "codCean" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_codCean_key" ON "products"("codCean");

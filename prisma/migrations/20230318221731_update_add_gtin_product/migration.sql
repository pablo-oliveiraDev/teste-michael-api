/*
  Warnings:

  - A unique constraint covering the columns `[gtin_cean]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gtin_cean` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "gtin_cean" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_gtin_cean_key" ON "products"("gtin_cean");

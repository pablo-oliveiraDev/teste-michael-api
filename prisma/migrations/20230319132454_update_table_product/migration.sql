/*
  Warnings:

  - Made the column `facture_id` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "facture_id" SET NOT NULL;

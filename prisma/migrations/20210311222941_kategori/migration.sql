/*
  Warnings:

  - You are about to drop the `Kategori` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Kategori";

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" SERIAL NOT NULL,
    "kategori" VARCHAR(100) NOT NULL,
    "foto" TEXT NOT NULL,

    PRIMARY KEY ("id_kategori")
);

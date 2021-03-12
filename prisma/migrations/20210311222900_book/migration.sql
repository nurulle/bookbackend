/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "book" (
    "id_buku" SERIAL NOT NULL,
    "judul" VARCHAR(200) NOT NULL,
    "pengarang" VARCHAR(100) NOT NULL,
    "penerbit" VARCHAR(100) NOT NULL,
    "ISBN" VARCHAR(20) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "halaman" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,

    PRIMARY KEY ("id_buku")
);

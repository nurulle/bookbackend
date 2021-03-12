/*
  Warnings:

  - You are about to drop the `Pemijaman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pemijaman";

-- CreateTable
CREATE TABLE "pemijaman" (
    "id_pinjam" SERIAL NOT NULL,
    "tgl_pinjam" DATE NOT NULL,
    "tgl_kembali" DATE NOT NULL,
    "status" BOOLEAN NOT NULL,

    PRIMARY KEY ("id_pinjam")
);

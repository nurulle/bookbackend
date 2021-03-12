/*
  Warnings:

  - You are about to drop the `Diskusi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Diskusi";

-- CreateTable
CREATE TABLE "diskusi" (
    "id_diskusi" SERIAL NOT NULL,
    "diskusi" TEXT NOT NULL,

    PRIMARY KEY ("id_diskusi")
);

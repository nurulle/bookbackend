/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rating";

-- CreateTable
CREATE TABLE "rating" (
    "id_rating" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,

    PRIMARY KEY ("id_rating")
);

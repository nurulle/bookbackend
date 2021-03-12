-- CreateTable
CREATE TABLE "Kategori" (
    "id_kategori" SERIAL NOT NULL,
    "kategori" VARCHAR(100) NOT NULL,
    "foto" TEXT NOT NULL,

    PRIMARY KEY ("id_kategori")
);

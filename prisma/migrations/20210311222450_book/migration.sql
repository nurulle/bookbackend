-- CreateTable
CREATE TABLE "Book" (
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

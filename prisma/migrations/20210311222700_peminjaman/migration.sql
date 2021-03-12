-- CreateTable
CREATE TABLE "Pemijaman" (
    "id_pinjam" SERIAL NOT NULL,
    "tgl_pinjam" DATE NOT NULL,
    "tgl_kembali" DATE NOT NULL,
    "status" BOOLEAN NOT NULL,

    PRIMARY KEY ("id_pinjam")
);

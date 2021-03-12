-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

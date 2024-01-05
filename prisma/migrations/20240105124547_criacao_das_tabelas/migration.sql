-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "reading_status" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comentary" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

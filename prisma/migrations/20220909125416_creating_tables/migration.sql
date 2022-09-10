/*
  Warnings:

  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "questions";

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "answerdBy" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "awswer" TEXT NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

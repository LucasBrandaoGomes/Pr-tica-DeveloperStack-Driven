/*
  Warnings:

  - You are about to drop the column `awswer` on the `Answers` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "awswer",
ADD COLUMN     "answer" TEXT NOT NULL;

import { IQuestionData } from "../types/questionTypes.js";
import { prisma } from "../config/database.js";

export async function insertQuestion(question: IQuestionData) {
    await prisma.questions.create({data: question})
}

export async function getQuestions() {
   return await prisma.questions.findMany()
}

export async function getQuestion(questionId: number) {
    return await prisma.questions.findUnique({where: {id:questionId}, include: {answer: true }})
 }
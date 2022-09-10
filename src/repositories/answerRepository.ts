import { IAnswerData } from "../types/answerTypes.js";
import { prisma } from "../config/database.js";

export async function insertAnswer(answer: IAnswerData, questionId:number) {
    await prisma.answers.create({data: {questionId, ...answer}})

}
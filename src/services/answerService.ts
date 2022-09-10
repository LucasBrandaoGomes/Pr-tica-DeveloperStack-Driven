import * as answerRepository from "../repositories/answerRepository.js"
import { IAnswerData } from "../types/answerTypes.js";

export async function createAnswer(answer:IAnswerData, questionId: number) {
    return await answerRepository.insertAnswer(answer, questionId)

}


import { IQuestionData } from "../types/questionTypes.js";
import * as questionRepository from '../repositories/questionRepository.js'

export async function createQuestion(question: IQuestionData){
    return await questionRepository.insertQuestion(question)
}

export async function getAllQuestions() {
    return await questionRepository.getQuestions()
}

export async function getAQuestionById(questionId:number) {
    return await questionRepository.getQuestion(questionId)
}
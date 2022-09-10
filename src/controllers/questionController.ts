import { Request, Response } from 'express';
import { IAnswerData } from '../types/answerTypes';
import { IQuestionData } from '../types/questionTypes';
import * as questionService from '../services/questionService.js'
import * as answerService from '../services/answerService.js'

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body
  await questionService.createQuestion(question)
  res.status(200).send("pergunta criado com sucesso")
}

export async function createAnswer(req: Request, res: Response) {
  const answer: IAnswerData = req.body
  const id: number = Number(req.params.id)

  await answerService.createAnswer(answer, id)
  res.status(200).send("reposta criado com sucesso")
}

export async function get(req: Request, res: Response) {
  const result = await questionService.getAllQuestions()
  res.status(200).send(result)
}

export async function getById(req: Request, res: Response) {
  const id: number = Number(req.params.id)
  const result = await questionService.getAQuestionById(id)
  res.status(200).send(result)
}

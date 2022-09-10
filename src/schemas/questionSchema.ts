import Joi from 'joi';
import { IQuestionData } from '../types/questionTypes.js';

export const questionSchema = Joi.object<IQuestionData>({
  askedBy: Joi.string().required(),
  question: Joi.string().required()
});

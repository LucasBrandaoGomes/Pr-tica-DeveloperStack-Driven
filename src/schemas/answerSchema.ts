import Joi from 'joi';
import { IAnswerData } from '../types/answerTypes.js';

export const answerSchema = Joi.object<IAnswerData>({
  answerdBy: Joi.string().required(),
  answer: Joi.string().required()
});

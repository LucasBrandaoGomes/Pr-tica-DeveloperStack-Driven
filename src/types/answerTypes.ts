import { Answers } from "@prisma/client";

export type IAnswerData = Omit<Answers, 'id' | 'questionId'>
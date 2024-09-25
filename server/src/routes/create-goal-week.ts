import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import { createGoal } from '../functions/createGoal'

export interface ICreateGoalRoute {
  title: string
  desiredWeeklyFrequency: number
}

type IRequestPostGoals = FastifyRequest<{ Body: ICreateGoalRoute }>

export const createGoalRoute: FastifyPluginAsync = async app => {
  app.post('/goals', async (request: IRequestPostGoals, response) => {
    const result = await createGoal(request.body)
    return response.status(result.status).send(result)
  })
}

import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import { getGoals } from '../functions/getGoal'

type IRequestGetGoals = FastifyRequest<{ Params: { weekNumber: number } }>

export const getGoalsWeekRoute: FastifyPluginAsync = async app => {
  app.get(
    '/goals/:weekNumber?',
    async (request: IRequestGetGoals, response) => {
      const result = await getGoals(request.params.weekNumber)
      return response.status(result.status).send(result)
    }
  )
}

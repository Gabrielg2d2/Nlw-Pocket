import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import type { IWeekData } from '../functions/getGoal/types/weekData'
import { updateGoal } from '../functions/updateGoal'

type IRequestGetGoals = FastifyRequest<{
  Body: {
    weekId: string
    progressId: string
    desiredWeeklyFrequency: number
    daysOfTheWeek: IWeekData
  }
}>

export const updateGoalWeekRoute: FastifyPluginAsync = async app => {
  app.put('/goal/update', async (request: IRequestGetGoals, response) => {
    const { weekId, progressId, desiredWeeklyFrequency, daysOfTheWeek } =
      request.body

    if (!weekId || !progressId || !desiredWeeklyFrequency || !daysOfTheWeek) {
      return response.status(400).send({
        message: {
          ptBr: 'Dados inválidos',
          en: 'Invalid data',
        },
        status: 400,
        data: null,
        error: '',
      })
    }

    const result = await updateGoal(
      weekId,
      progressId,
      desiredWeeklyFrequency,
      daysOfTheWeek
    )
    return response.status(result.status).send(result)
  })
}

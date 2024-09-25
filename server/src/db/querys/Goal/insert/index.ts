import { type ICreateGoalValues, dbNewGoal } from './functions/dbCreateGoal'
import { dbCreateInformationWeek } from './functions/dbCreateInformationWeek'
import { dbCreateProgressWeeklyGoals } from './functions/dbCreateProgressWeeklyGoals'

export type ICreateGoalResult = {
  goal: {
    id: string
    title: string
    week: number
    year: number
    createdAt: Date
  }
  week: {
    id: string
    goalId: string | null
    desiredWeeklyFrequency: number
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
  }
  progressWeeklyGoals: {
    id: string
    goalWeekId: string | null
    actualFrequency: number
    percentageAchieved: number
  }
}

export async function dbCreateGoal(
  values: ICreateGoalValues
): Promise<ICreateGoalResult> {
  // TODO: testar dessa forma
  // try {
  //   const result = await dbNewGoal(values, { transaction })

  //   const resultWeek = await dbCreateInformationWeek(
  //     {
  //       goalId: result.id,
  //       desiredWeeklyFrequency: values.desiredWeeklyFrequency,
  //       monday: false,
  //       tuesday: false,
  //       wednesday: false,
  //       thursday: false,
  //       friday: false,
  //       saturday: false,
  //       sunday: false,
  //     },
  //     { transaction }
  //   )

  //   const resultProgressWeeklyGoals = await dbCreateProgressWeeklyGoals(
  //     {
  //       goalWeekId: resultWeek.id,
  //       actualFrequency: 0,
  //       percentageAchieved: 0,
  //     },
  //     { transaction }
  //   )

  //   await transaction.commit()

  //   return {
  //     goal: result,
  //     week: resultWeek,
  //     progressWeeklyGoals: resultProgressWeeklyGoals,
  //   }
  // } catch (error) {
  //   await transaction.rollback()
  //   throw error
  // }

  const result = await dbNewGoal(values)

  const resultWeek = await dbCreateInformationWeek({
    goalId: result.id,
    desiredWeeklyFrequency: values.desiredWeeklyFrequency,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  })

  const resultProgressWeeklyGoals = await dbCreateProgressWeeklyGoals({
    goalWeekId: resultWeek.id,
    actualFrequency: 0,
    percentageAchieved: 0,
  })

  return {
    goal: result,
    week: resultWeek,
    progressWeeklyGoals: resultProgressWeeklyGoals,
  }
}

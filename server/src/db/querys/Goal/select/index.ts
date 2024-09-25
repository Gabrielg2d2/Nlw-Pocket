import { eq } from 'drizzle-orm'
import { db } from '../../..'
import { goals, goalsWeek, goalsWeekProgress } from '../../../schema'

export type IDataGetGoal = {
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
  progress: {
    id: string
    goalWeekId: string | null
    actualFrequency: number
    percentageAchieved: number
  }
}

export async function dbGetGoal(weekNumber?: number): Promise<IDataGetGoal[]> {
  // Todo: testar dessa forma
  // const query = db
  //   .select({
  //     goal: goals,
  //     week: goalsWeek,
  //     progress: goalsWeekProgress,
  //   })
  //   .from(goals)
  //   .leftJoin(goalsWeek, eq(goalsWeek.goalId, goals.id))
  //   .leftJoin(goalsWeekProgress, eq(goalsWeekProgress.goalWeekId, goalsWeek.id))

  // if (weekNumber !== undefined) {
  //   query.where(eq(goals.week, weekNumber))
  // }

  // const resultGoal = await query

  // const result: IDataGetGoal[] = resultGoal.map(row => ({
  //   goal: row.goal,
  //   week: row.week,
  //   progress: row.progress,
  // }))

  // return result

  const result: IDataGetGoal[] = []

  const resultGoal = weekNumber
    ? await db.select().from(goals).where(eq(goals.week, weekNumber))
    : await db.select().from(goals)

  for (const goal of resultGoal) {
    const resultWeek = await db
      .select()
      .from(goalsWeek)
      .where(eq(goalsWeek.goalId, goal.id))

    const resultProgress = await db
      .select()
      .from(goalsWeekProgress)
      .where(eq(goalsWeekProgress.goalWeekId, resultWeek[0].id))

    result.push({
      goal: goal,
      week: resultWeek[0],
      progress: resultProgress[0],
    })
  }

  return result
}

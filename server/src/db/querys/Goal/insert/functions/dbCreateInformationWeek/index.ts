import { db } from '../../../../..'
import { goalsWeek } from '../../../../../schema'

export interface ICreateWeeklyGoalsValues {
  goalId: string
  desiredWeeklyFrequency: number
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}

export async function dbCreateInformationWeek(
  values: ICreateWeeklyGoalsValues
) {
  const result = await db.insert(goalsWeek).values(values).returning()
  return result[0]
}

import { eq } from 'drizzle-orm'
import { db } from '../../..'
import { goals, lowerCase } from '../../../schema'

export async function dbIsExistGoal(title: string) {
  try {
    const newTitle = title.trim().toLowerCase()

    const result = await db
      .select()
      .from(goals)
      .where(eq(lowerCase(goals.title), newTitle))

    if (result.length > 0) return true

    return false
  } catch (error) {
    console.error('Error while checking goal existence: ', error)
    return false
  }
}

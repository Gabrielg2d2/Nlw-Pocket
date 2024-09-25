import { db } from "../../../../..";
import { goalsWeekProgress } from "../../../../../schema";

export interface ICreateProgressWeeklyGoals {
  goalWeekId: string;
  actualFrequency: number;
  percentageAchieved: number;
}

export type ICreateProgressWeeklyGoalsResult = Promise<{
  id: string;
  goalWeekId: string | null;
  actualFrequency: number;
  percentageAchieved: number;
}>;

export async function dbCreateProgressWeeklyGoals(
  values: ICreateProgressWeeklyGoals
): ICreateProgressWeeklyGoalsResult {
  const result = await db
    .insert(goalsWeekProgress)
    .values([values])
    .returning();
  return result[0];
}

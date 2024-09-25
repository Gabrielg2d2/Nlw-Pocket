import { db } from "../../../../..";
import { goals } from "../../../../../schema";

export interface ICreateGoalValues {
  title: string;
  desiredWeeklyFrequency: number;
  week: number;
  year: number;
}

export async function dbNewGoal(values: ICreateGoalValues) {
  const result = await db.insert(goals).values(values).returning();
  return result[0];
}

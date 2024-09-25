import { eq } from "drizzle-orm";
import { db } from "../../..";
import { goalsWeek, goalsWeekProgress } from "../../../schema";

export type IUpdateGoal = {
  daysOfTheWeek: {
    day: string;
    value: boolean;
  }[];
  actualFrequency: number;
  percentageAchieved: number;
};

export async function dbUpdateGoal(
  weekId: string,
  progressId: string,
  data: IUpdateGoal
) {
  await db
    .update(goalsWeek)
    .set({
      monday: data.daysOfTheWeek[0].value,
      tuesday: data.daysOfTheWeek[1].value,
      wednesday: data.daysOfTheWeek[2].value,
      thursday: data.daysOfTheWeek[3].value,
      friday: data.daysOfTheWeek[4].value,
      saturday: data.daysOfTheWeek[5].value,
      sunday: data.daysOfTheWeek[6].value,
    })
    .where(eq(goalsWeek.id, weekId));

  await db
    .update(goalsWeekProgress)
    .set({
      actualFrequency: data.actualFrequency,
      percentageAchieved: data.percentageAchieved,
    })
    .where(eq(goalsWeekProgress.id, progressId));
}

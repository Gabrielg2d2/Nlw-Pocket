import { closeDb, db } from ".";
import { updateGoal } from "../functions/updateGoal";
import { dbCreateGoal } from "./querys/Goal/insert";
import { goals, goalsWeek, goalsWeekProgress } from "./schema";

async function seed() {
  await db.delete(goalsWeekProgress);

  await db.delete(goalsWeek);
  await db.delete(goals);

  const goal1 = await dbCreateGoal({
    title: "Musculação",
    desiredWeeklyFrequency: 5,
    week: 14,
    year: 2024,
  });

  await dbCreateGoal({
    title: "Leitura Diária",
    desiredWeeklyFrequency: 7,
    week: 15,
    year: 2024,
  });

  const dataGoal1 = {
    progressId: goal1.progressWeeklyGoals.id,
    weekId: goal1.week.id,
    desiredWeeklyFrequency: goal1.week.desiredWeeklyFrequency,
    daysOfTheWeek: [
      {
        day: "monday",
        value: true,
      },
      {
        day: "tuesday",
        value: true,
      },
      {
        day: "wednesday",
        value: true,
      },
      {
        day: "thursday",
        value: true,
      },
      {
        day: "friday",
        value: false,
      },
      {
        day: "saturday",
        value: false,
      },
      {
        day: "sunday",
        value: false,
      },
    ],
  };

  await updateGoal(
    dataGoal1.weekId,
    dataGoal1.progressId,
    dataGoal1.desiredWeeklyFrequency,
    dataGoal1.daysOfTheWeek
  );
}

seed()
  .catch((error) => {
    console.error("Error inserting seed data:", error);
  })
  .finally(async () => {
    await closeDb();
  });

import { dbUpdateGoal } from "../../db/querys/UpdateGoal/put";
import { IWeekData } from "../getGoal/types/weekData";
import { errorUpdateGoal } from "./error";
import { calculatePercentage } from "./functions/calculatePercentage";
import { frequencyWeek } from "./functions/frequencyWeek";

export async function updateGoal(
  weekId: string,
  progressId: string,
  desiredWeeklyFrequency: number,
  daysOfTheWeek: IWeekData
) {
  try {
    const actualFrequency = frequencyWeek(daysOfTheWeek);

    const percentageAchieved = calculatePercentage(
      daysOfTheWeek,
      desiredWeeklyFrequency
    );

    const newData = {
      daysOfTheWeek,
      actualFrequency,
      percentageAchieved,
    };

    await dbUpdateGoal(weekId, progressId, newData);

    return {
      message: {
        ptBr: "Dados atualizados com sucesso",
        en: "Data updated successfully",
      },
      status: 201,
      data: newData,
      typeMessage: "success",
    };
  } catch (error) {
    return errorUpdateGoal(error as Error);
  }
}

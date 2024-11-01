import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import z from "zod";
import { dbCreateGoal } from "../../db/querys/Goal/insert";
import { dbIsExistGoal } from "../../db/querys/Goal/selectIsExistGoal";
import type { ICreateGoalRoute } from "../../routes/create-goal-week";
import { type CustomError, errorCreateGoal } from "./error";
dayjs.extend(weekOfYear);

function validateCreateGoalRequest(request: ICreateGoalRoute) {
  const schema = z.object({
    title: z.string().min(1).max(255),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  });

  return schema.parse(request);
}

export type { ICreateGoalRoute };

export async function createGoal(request: ICreateGoalRoute) {
  try {
    const requestValues = validateCreateGoalRequest(request);

    const isExistGoal = await dbIsExistGoal(requestValues.title);

    if (isExistGoal) {
      return {
        message: {
          ptBr: "Já existe uma meta com esse título",
          en: "There is already a goal with this title",
        },
        status: 400,
        typeMessage: "error",
        data: null,
      };
    }

    const currentWeek = dayjs().week();
    const currentYear = dayjs().year();

    const newGoal = {
      ...requestValues,
      week: currentWeek,
      year: currentYear,
    };

    const result = await dbCreateGoal(newGoal);

    return {
      message: {
        ptBr: "Meta criada com sucesso",
        en: "Goal created successfully",
      },
      status: 200,
      data: result,
      typeMessage: "success",
    };
  } catch (error) {
    return errorCreateGoal(error as CustomError);
  }
}

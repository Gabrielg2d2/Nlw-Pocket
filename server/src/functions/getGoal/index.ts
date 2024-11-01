import { dbGetGoal } from "../../db/querys/Goal/select";
import { errorGetGoal } from "./error";
import { formattedGoal } from "./functions/formattedGoal";

export async function getGoals(weekNumber?: number) {
  try {
    const result = await dbGetGoal(weekNumber);

    if (!result.length) {
      return {
        message: {
          ptBr: "Nenhum dado encontrado",
          en: "No data found",
        },
        status: 404,
        data: [],
        typeMessage: "error",
      };
    }

    const resultFormatted = result.map((goal) => formattedGoal(goal));

    return {
      message: {
        ptBr: "",
        en: "",
      },
      status: 200,
      data: resultFormatted,
      typeMessage: "success",
    };
  } catch (error) {
    return errorGetGoal(error as Error);
  }
}

import { ErrorDefault } from "../../../../functions/ErrorDefault";
import { api } from "../../../../infra/api";

export class Repository {
  async getListGoals(weekNumber?: number) {
    try {
      const url = weekNumber ? `/goals/${weekNumber}` : "/goals";
      const response = await api.get(url);

      return response.data;
    } catch (error: Error | any) {
      return new ErrorDefault(error).execute();
    }
  }
}

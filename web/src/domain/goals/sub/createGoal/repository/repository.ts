import { ErrorDefault } from "../../../../functions/ErrorDefault";
import { api } from "../../../../infra/api";

export class Repository {
  async createGoal(title: string, desiredWeeklyFrequency: number) {
    try {
      const response = await api.post("/goals", {
        title,
        desiredWeeklyFrequency,
      });

      return response.data;
    } catch (error: Error | any) {
      return new ErrorDefault(error).execute();
    }
  }

  async updateGoal() {
    console.log("Updating goal Repository");
  }

  async deleteGoal() {
    console.log("Deleting goal Repository");
  }
}

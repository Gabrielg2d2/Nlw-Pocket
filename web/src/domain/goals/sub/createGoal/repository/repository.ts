import { api } from "../../../../infra/api";

export class Repository {
  async createGoal(title: string, desiredWeeklyFrequency: number) {
    try {
      const response = await api.post("/goals", {
        title,
        desiredWeeklyFrequency,
      });

      return response.data;
    } catch (error) {
      throw new Error("Error creating goal");
    }
  }

  async updateGoal() {
    console.log("Updating goal Repository");
  }

  async deleteGoal() {
    console.log("Deleting goal Repository");
  }
}

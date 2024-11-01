import { Repository } from "./repository/repository";

export class CreateGoalSub {
  constructor(private readonly repository = new Repository()) {}

  async createGoal(title: string, desiredWeeklyFrequency: number) {
    try {
      await this.repository.createGoal(title, desiredWeeklyFrequency);
    } catch (error) {
      throw new Error("Error creating goal");
    }
  }
}

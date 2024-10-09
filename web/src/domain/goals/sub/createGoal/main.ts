import { Repository } from "./repository/repository";

export class CreateGoalSub {
  constructor(private readonly repository = new Repository()) {}

  async createGoal(goal: string, estimatedQuantity: number) {
    try {
      await this.repository.createGoal(goal, estimatedQuantity);
    } catch (error) {
      throw new Error("Error creating goal");
    }
  }
}

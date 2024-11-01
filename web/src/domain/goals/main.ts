import { CreateGoalSub } from "./sub/createGoal/main";

export class GoalDomain {
  constructor(private readonly createGoalSub = new CreateGoalSub()) {}

  async createGoal(goal: string, estimatedQuantity: number) {
    await this.createGoalSub.createGoal(goal, estimatedQuantity);
  }

  async updateGoal() {
    console.log("Updating goal");
  }

  async deleteGoal() {
    console.log("Deleting goal");
  }

  async getListGoals() {
    console.log("Getting list goals");
  }
}

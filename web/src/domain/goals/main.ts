import { CreateGoalSub } from "./sub/createGoal/main";

export class GoalDomain {
  constructor(private readonly createGoalSub = new CreateGoalSub()) {}

  getListGoals() {
    console.log("Getting list goals");
  }

  async createGoal(goal: string, estimatedQuantity: number) {
    await this.createGoalSub.createGoal(goal, estimatedQuantity);
  }

  updateGoal() {
    console.log("Updating goal");
  }

  deleteGoal() {
    console.log("Deleting goal");
  }
}

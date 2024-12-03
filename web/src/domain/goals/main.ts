import { CreateGoalSub } from "./sub/createGoal/main";
import { GetListGoalsSub } from "./sub/getListGoals/main";

export class GoalDomain {
  constructor(
    private readonly createGoalSub = new CreateGoalSub(),
    private readonly getListGoalsSub = new GetListGoalsSub()
  ) {}

  async getListGoals(weekNumber?: number) {
    return await this.getListGoalsSub.getListGoals(weekNumber);
  }

  async createGoal(goal: string, estimatedQuantity: number) {
    return await this.createGoalSub.createGoal(goal, estimatedQuantity);
  }

  async updateGoal() {
    console.log("Updating goal");
  }

  async deleteGoal() {
    console.log("Deleting goal");
  }
}

import { Repository } from "./repository/repository";

export class CreateGoalSub {
  constructor(private readonly repository = new Repository()) {}

  async createGoal(title: string, desiredWeeklyFrequency: number) {
    return await this.repository.createGoal(title, desiredWeeklyFrequency);
  }
}

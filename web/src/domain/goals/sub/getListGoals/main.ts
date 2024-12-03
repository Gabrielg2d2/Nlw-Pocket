import { Repository } from "./repository/repository";

export class GetListGoalsSub {
  constructor(private readonly repository = new Repository()) {}

  async getListGoals(weekNumber?: number) {
    return await this.repository.getListGoals(weekNumber);
  }
}

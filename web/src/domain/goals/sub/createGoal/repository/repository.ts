export class Repository {
  async createGoal(goal: string, estimatedQuantity: number) {
    try {
      console.log("Creating goal Repository");
      console.log(`Goal: ${goal} - Days: ${estimatedQuantity}`);
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

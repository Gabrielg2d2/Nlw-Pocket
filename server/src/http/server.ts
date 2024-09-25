import fastify from "fastify";
import { createGoalRoute } from "../routes/create-goal-week";
import { getGoalsWeekRoute } from "../routes/get-goals-week";
import { updateGoalWeekRoute } from "../routes/update-goal-week";

const app = fastify();

app.register(createGoalRoute);
app.register(getGoalsWeekRoute);
app.register(updateGoalWeekRoute);

app
  .listen({ port: 3333 })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  })
  .catch((err) => {
    console.error(err);
  });

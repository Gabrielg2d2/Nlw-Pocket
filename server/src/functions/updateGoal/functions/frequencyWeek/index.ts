import { IWeekData } from "../../../getGoal/types/weekData";

export function frequencyWeek(daysOfTheWeek: IWeekData) {
  return daysOfTheWeek.filter((day) => day.value).length;
}

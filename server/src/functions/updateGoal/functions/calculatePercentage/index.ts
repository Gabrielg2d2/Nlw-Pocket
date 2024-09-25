import { IWeekData } from "../../../getGoal/types/weekData";
import { frequencyWeek } from "../frequencyWeek";

export function calculatePercentage(
  weekData: IWeekData,
  desiredWeeklyFrequency: number
) {
  const actualFrequency = frequencyWeek(weekData);
  return (actualFrequency / desiredWeeklyFrequency) * 100;
}

import { IDataGetGoal } from "../../../../db/querys/Goal/select";

export type IFormattedGoal = {
  goal: {
    id: string;
    title: string;
    week: number;
    year: number;
    createdAt: Date;
  };
  week: {
    id: string;
    daysOfTheWeek: {
      day: string;
      value: boolean;
    }[];
  };
  progress: {
    id: string;
    desiredWeeklyFrequency: number;
    actualFrequency: number;
    percentageAchieved: number;
  };
};

export function formattedGoal(result: IDataGetGoal) {
  const weekData = [
    {
      day: "monday",
      value: result.week.monday,
    },
    {
      day: "tuesday",
      value: result.week.tuesday,
    },
    {
      day: "wednesday",
      value: result.week.wednesday,
    },
    {
      day: "thursday",
      value: result.week.thursday,
    },
    {
      day: "friday",
      value: result.week.friday,
    },
    {
      day: "saturday",
      value: result.week.saturday,
    },
    {
      day: "sunday",
      value: result.week.sunday,
    },
  ];

  return {
    goal: result.goal,
    week: {
      id: result.week.id,
      daysOfTheWeek: weekData,
    },
    progress: {
      id: result.progress.id,
      desiredWeeklyFrequency: result.week.desiredWeeklyFrequency,
      actualFrequency: result.progress.actualFrequency,
      percentageAchieved: result.progress.percentageAchieved,
    },
  };
}

import { createId } from "@paralleldrive/cuid2";
import type { Column } from "drizzle-orm";
import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  real,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("title").notNull(),
  week: integer("week").notNull(),
  year: integer("year").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const goalsWeek = pgTable("goals_week", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  goalId: text("goal_id").references(() => goals.id),
  desiredWeeklyFrequency: integer("desired_weekly_frequency").notNull(),
  monday: boolean("monday").notNull().default(false),
  tuesday: boolean("tuesday").notNull().default(false),
  wednesday: boolean("wednesday").notNull().default(false),
  thursday: boolean("thursday").notNull().default(false),
  friday: boolean("friday").notNull().default(false),
  saturday: boolean("saturday").notNull().default(false),
  sunday: boolean("sunday").notNull().default(false),
});

export const goalsWeekProgress = pgTable("goals_week_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  goalWeekId: text("goal_week_id").references(() => goalsWeek.id),
  actualFrequency: integer("actual_frequency").notNull().default(0),
  percentageAchieved: real("percentage_achieved").notNull().default(0.0),
});

export function lowerCase(col: Column) {
  return sql<string>`LOWER(${col})`;
}

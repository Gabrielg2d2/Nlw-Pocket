CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "goals_week" (
	"id" text PRIMARY KEY NOT NULL,
	"goal_id" text,
	"desired_weekly_frequency" integer NOT NULL,
	"monday" boolean DEFAULT false NOT NULL,
	"tuesday" boolean DEFAULT false NOT NULL,
	"wednesday" boolean DEFAULT false NOT NULL,
	"thursday" boolean DEFAULT false NOT NULL,
	"friday" boolean DEFAULT false NOT NULL,
	"saturday" boolean DEFAULT false NOT NULL,
	"sunday" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "goals_week_progress" (
	"id" text PRIMARY KEY NOT NULL,
	"goal_week_id" text,
	"actual_frequency" integer DEFAULT 0 NOT NULL,
	"percentage_achieved" real DEFAULT 0 NOT NULL,
	"week" integer NOT NULL,
	"year" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goals_week" ADD CONSTRAINT "goals_week_goal_id_goals_id_fk" FOREIGN KEY ("goal_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goals_week_progress" ADD CONSTRAINT "goals_week_progress_goal_week_id_goals_week_id_fk" FOREIGN KEY ("goal_week_id") REFERENCES "public"."goals_week"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

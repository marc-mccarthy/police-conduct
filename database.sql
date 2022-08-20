
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL ,
    "password" VARCHAR (1000)  NOT NULL
);

CREATE TABLE "report" (
    "id" SERIAL PRIMARY KEY,
    "anonymous" BOOLEAN  ,
    "public" BOOLEAN  ,
    "verification" BOOLEAN  ,
    "handle_info" BOOLEAN  ,
    "officer_first" VARCHAR (255)  ,
    "officer_last" VARCHAR (255)  ,
    "officer_rank" VARCHAR (255)  ,
    "officer_badge" VARCHAR (255)  ,
    "officer_department" VARCHAR (255)  ,
    "interaction_date" DATE  ,
    "interaction_time" TIME  ,
    "interaction_location" VARCHAR (255)  ,
    "reference_number" VARCHAR (255)  ,
    "interaction_summary" VARCHAR (10000) NOT NULL  ,
    "report_outcomes" VARCHAR (10000)  ,
    "reporter_first" VARCHAR (255) DEFAULT NULL ,
    "reporter_last" VARCHAR (255)  DEFAULT NULL ,
    "reporter_email" VARCHAR (255) DEFAULT NULL ,
    "reporter_phone" VARCHAR (255)  DEFAULT NULL ,
    "userID" INTEGER REFERENCES "user" (id)
);
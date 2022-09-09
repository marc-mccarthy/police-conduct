-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL ,
    "password" VARCHAR (1000)  NOT NULL,
    "access" INTEGER DEFAULT 0 NOT NULL
);

INSERT INTO "user" ("id", "username", "password", "access") VALUES (5, 'Admin', '$2a$10$0o4ED.2HiXKw2NLt9QysvuZJVvHYeEMTqDbULurONkuc.yRyjPR6y', 1);

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
    "officer_anythingelse" VARCHAR (1000) ,
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

SELECT * FROM "report" WHERE public = true;

INSERT INTO "report" ("anonymous","public","verification","handle_info","officer_first","officer_last","officer_rank","officer_badge","officer_department","officer_anythingelse","interaction_date","interaction_time","interaction_location","reference_number","interaction_summary","report_outcomes","reporter_first","reporter_last","reporter_email","reporter_phone","userID")
VALUES
('false', 'true', 'true', 'true', 'Ted', 'Bundy', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'We fought', 'Should lose his license', 'Barnie', 'Rubble', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Johnny', 'Cash', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'He hit my leg and I lost my glasses', 'Should lose his license', 'Great', 'Bambino', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Baker', 'Square', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'Stepped on my pinky toe', 'Should lose his license', 'Bob', 'Ross', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Stone Cold', 'Steve Austin', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'She gave me a wedgie', 'Should lose his license', 'Marshall', 'Mathers', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Ted', 'Bundy', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'We fought', 'Should lose his license', 'Barnie', 'Rubble', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Johnny', 'Cash', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'He hit my leg and I lost my glasses', 'Should lose his license', 'Great', 'Bambino', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Baker', 'Square', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'Stepped on my pinky toe', 'Should lose his license', 'Bob', 'Ross', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Stone Cold', 'Steve Austin', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'She gave me a wedgie', 'Should lose his license', 'Marshall', 'Mathers', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Ted', 'Bundy', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'We fought', 'Should lose his license', 'Barnie', 'Rubble', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Johnny', 'Cash', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'He hit my leg and I lost my glasses', 'Should lose his license', 'Great', 'Bambino', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Baker', 'Square', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'Stepped on my pinky toe', 'Should lose his license', 'Bob', 'Ross', 'yubbadubbado@gmail.com', '435-747-1943', 1),
('false', 'true', 'true', 'true', 'Stone Cold', 'Steve Austin', 'Sergeant', 4359, 'China Town District', 'Kind Eyes', '2022-08-10', '23:00:00', 'Los Angeles, CA', 342, 'She gave me a wedgie', 'Should lose his license', 'Marshall', 'Mathers', 'yubbadubbado@gmail.com', '435-747-1943', 1);

-- On commence par drop les tables 

DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "game";
DROP TABLE IF EXISTS "result";
DROP TABLE IF EXISTS "difficulty";
DROP TABLE IF EXISTS "theme";


-- user

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" PASSWORD,
    "role" TEXT NOT NULL DEFAULT 'User',
    "avatar" TEXT -- on laisse la possibilité à l'utilisateur de ne pas choisir d'avatar
);

-- game 

CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#000',
    "rule" TEXT NOT NULL
);

-- result

CREATE TABLE "result" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "point" INT,
    "game_id" INT NOT NULL REFERENCES "game"("id")
    "user_id" INT NOT NULL REFERENCES "user"("id") -- Création d'une foreign key, on force le fait d'avoir un utilisateur
);

-- difficulty

CREATE TABLE "difficulty" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#000', -- #12345 voir un raccourci CSS "red" par exemple
    "coefficient" REAL NOT NULL, -- pour un nombre réel
);

-- theme

CREATE TABLE "theme" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#000', -- #12345 voir un raccourci CSS "red" par exemple
);

-- "game_has_theme" (table de liaison)

CREATE TABLE "game_has_theme" (
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "theme_id" INT NOT NULL REFERENCES "theme"("id"),
    PRIMARY KEY ("game_id"."theme_id")
);

-- "game_has_difficulty" (table de liaison)

CREATE TABLE "game_has_difficulty" (
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "difficulty_id" INT NOT NULL REFERENCES "difficulty"("id")
    PRIMARY KEY ("game_id"."difficulty_id")
);
-- -----------------------------------------------------
-- Schema Tap
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL, -- Erata username => email
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'User',
    "avatar" TEXT, -- on laisse la possibilité à l'utilisateur de ne pas choisir d'avatar
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "game"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "game";

CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#000',
    "rule" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "result"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "result";

CREATE TABLE "result" (
    "id" SERIAL PRIMARY KEY,
    "game_title" TEXT NOT NULL,
    "date" DATE,
    "point" INT,
    "game_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "difficulty"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "difficulty";

CREATE TABLE "difficulty" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#000', -- #12345 voir un raccourci CSS "red" par exemple
    "coefficient" REAL NOT NULL, -- pour un nombre réel
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "theme"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "theme";

CREATE TABLE "theme" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#000', -- #12345 voir un raccourci CSS "red" par exemple
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);


-- -----------------------------------------------------
-- Table "game_has_theme" (table de liaison)
-- -----------------------------------------------------

CREATE TABLE "game_has_theme" (
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "theme_id" INT NOT NULL REFERENCES "theme"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("game_id", "theme_id")
);

-- -----------------------------------------------------
-- "game_has_difficulty" (table de liaison)
-- -----------------------------------------------------

CREATE TABLE "game_has_difficulty" (
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "difficulty_id" INT NOT NULL REFERENCES "difficulty"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("game_id", "difficulty_id")
);
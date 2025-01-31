/*
  Warnings:

  - The primary key for the `TechSkill` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TechSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "primary_color" TEXT NOT NULL,
    "secondary_color" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL
);
INSERT INTO "new_TechSkill" ("end_date", "id", "link", "name", "primary_color", "secondary_color", "short_description", "start_date") SELECT "end_date", "id", "link", "name", "primary_color", "secondary_color", "short_description", "start_date" FROM "TechSkill";
DROP TABLE "TechSkill";
ALTER TABLE "new_TechSkill" RENAME TO "TechSkill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

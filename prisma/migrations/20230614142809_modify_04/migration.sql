/*
  Warnings:

  - You are about to drop the column `no` on the `race_result` table. All the data in the column will be lost.
  - Added the required column `no` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `driver` ADD COLUMN `no` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `race_result` DROP COLUMN `no`;

/*
  Warnings:

  - You are about to drop the column `avatar` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `driver` on the `race_result` table. All the data in the column will be lost.
  - You are about to drop the `team_driver` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `team_id` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driver_id` to the `race_result` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `team_driver` DROP FOREIGN KEY `team_driver_driver_id_fkey`;

-- DropForeignKey
ALTER TABLE `team_driver` DROP FOREIGN KEY `team_driver_team_id_fkey`;

-- AlterTable
ALTER TABLE `driver` DROP COLUMN `avatar`,
    ADD COLUMN `team_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `race_result` DROP COLUMN `driver`,
    ADD COLUMN `driver_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `team_driver`;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `race_result` ADD CONSTRAINT `race_result_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `driver`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `Points` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `grands_prix_entered` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `highest_grid_position` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `highest_race_finish` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `podiums` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `world_championships` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `chassis` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `fastest_laps` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `first_team_entry` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `pole_positions` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `power_unit` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `world_championships` on the `team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `driver` DROP COLUMN `Points`,
    DROP COLUMN `grands_prix_entered`,
    DROP COLUMN `highest_grid_position`,
    DROP COLUMN `highest_race_finish`,
    DROP COLUMN `podiums`,
    DROP COLUMN `world_championships`,
    MODIFY `date_of_birth` DATE NOT NULL;

-- AlterTable
ALTER TABLE `team` DROP COLUMN `chassis`,
    DROP COLUMN `fastest_laps`,
    DROP COLUMN `first_team_entry`,
    DROP COLUMN `pole_positions`,
    DROP COLUMN `power_unit`,
    DROP COLUMN `world_championships`;

-- CreateTable
CREATE TABLE `race` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grand_prix` VARCHAR(191) NOT NULL,
    `race_date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `race_result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `race_id` INTEGER NOT NULL,
    `pos` INTEGER NOT NULL,
    `no` INTEGER NOT NULL,
    `driver` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `laps` INTEGER NOT NULL,
    `time` BIGINT NOT NULL,
    `pts` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `race_result` ADD CONSTRAINT `race_result_race_id_fkey` FOREIGN KEY (`race_id`) REFERENCES `race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

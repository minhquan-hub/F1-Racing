-- CreateTable
CREATE TABLE `driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `place_of_birth` VARCHAR(191) NOT NULL,
    `rank` INTEGER NOT NULL,
    `podiums` INTEGER NOT NULL,
    `Points` DOUBLE NOT NULL,
    `grands_prix_entered` INTEGER NOT NULL,
    `world_championships` INTEGER NOT NULL,
    `highest_race_finish` VARCHAR(191) NOT NULL,
    `highest_grid_position` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_name` VARCHAR(191) NOT NULL,
    `base` VARCHAR(191) NOT NULL,
    `team_chief` VARCHAR(191) NOT NULL,
    `chassis` VARCHAR(191) NOT NULL,
    `power_unit` VARCHAR(191) NOT NULL,
    `first_team_entry` INTEGER NOT NULL,
    `world_championships` INTEGER NOT NULL,
    `pole_positions` INTEGER NOT NULL,
    `fastest_laps` INTEGER NOT NULL,

    UNIQUE INDEX `team_team_name_key`(`team_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_id` INTEGER NOT NULL,
    `driver_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `team_driver` ADD CONSTRAINT `team_driver_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_driver` ADD CONSTRAINT `team_driver_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `driver`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

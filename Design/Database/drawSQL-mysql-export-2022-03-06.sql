CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NULL,
    `name` VARCHAR(255) NOT NULL,
    `user_status` TINYINT(1) NOT NULL
);
ALTER TABLE
    `users` ADD PRIMARY KEY `users_id_primary`(`id`);
ALTER TABLE
    `users` ADD UNIQUE `users_email_unique`(`email`);
CREATE TABLE `roles`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `roles` ADD PRIMARY KEY `roles_id_primary`(`id`);
ALTER TABLE
    `roles` ADD UNIQUE `roles_role_name_unique`(`role_name`);
CREATE TABLE `user_role_map`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_id` INT NOT NULL,
    `user_id` INT NOT NULL
);
ALTER TABLE
    `user_role_map` ADD PRIMARY KEY `user_role_map_id_primary`(`id`);
CREATE TABLE `loans`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `amount` INT NOT NULL,
    `processing_fees` INT NULL,
    `time_period` INT NOT NULL,
    `total_paid` INT NOT NULL,
    `total_remaining` INT NOT NULL,
    `user_id` INT NOT NULL,
    `vendor_id` INT NOT NULL,
    `intreset_percentage` INT NULL
);
ALTER TABLE
    `loans` ADD PRIMARY KEY `loans_id_primary`(`id`);
CREATE TABLE `loan_details`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `sno` INT NOT NULL,
    `principal_amount` INT NOT NULL,
    `intreset` INT NOT NULL,
    `gst` INT NULL,
    `emi_amount` INT NOT NULL,
    `previous_due_amount` INT NULL,
    `total` INT NOT NULL,
    `due_date` DATE NOT NULL,
    `due_month` INT NOT NULL,
    `due_year` INT NOT NULL,
    `paid_amount` INT NULL,
    `paid_date` DATE NULL,
    `paid_app` VARCHAR(255) NULL,
    `loan_id` INT NOT NULL
);
ALTER TABLE
    `loan_details` ADD PRIMARY KEY `loan_details_id_primary`(`id`);
ALTER TABLE
    `user_role_map` ADD CONSTRAINT `user_role_map_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `loans` ADD CONSTRAINT `loans_vendor_id_foreign` FOREIGN KEY(`vendor_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `user_role_map` ADD CONSTRAINT `user_role_map_role_id_foreign` FOREIGN KEY(`role_id`) REFERENCES `roles`(`id`);
ALTER TABLE
    `loan_details` ADD CONSTRAINT `loan_details_loan_id_foreign` FOREIGN KEY(`loan_id`) REFERENCES `loans`(`id`);
ALTER TABLE
    `loans` ADD CONSTRAINT `loans_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
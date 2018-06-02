DROP DATABASE IF EXISTS `service_swap`;
CREATE DATABASE IF NOT EXISTS `service_swap`;

USE `service_swap`;

CREATE TABLE IF NOT EXISTS `service_swap`.`user`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `login` VARCHAR(100) UNIQUE NOT NULL,
  `first_name` VARCHAR(250) NOT NULL,
  `last_name` VARCHAR(250) NOT NULL,
  `role` ENUM('Admin', 'Client') NOT NULL,
  `password` VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `service_swap`.`category`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `service_swap`.`service`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `category_id` INT NOT NULL,
FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `service_swap`.`user_service`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `user_id` INT NOT NULL,
FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  `service_id` INT NOT NULL,
FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

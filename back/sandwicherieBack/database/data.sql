-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_880E0D76F85E0677` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `admin` (`id`, `username`, `roles`, `password`) VALUES
(1,	'Admin',	'[\"ROLE_ADMIN\"]',	'$argon2id$v=19$m=65536,t=4,p=1$2j59iphBLzR3BkJbBnEiSw$tgE9thnloTsmWPK9LF9zfmnJla7xSj/klewIBaJ5QJ8'),
(2,	'Maxime',	'[\"ROLE_ADMIN\"]',	'$argon2id$v=19$m=65536,t=4,p=1$7vQbCHlrPC3knc2wrk6Bkw$1VO+oJXKvk3K0bkAqIm2eBsEifdVpdovgDgq49LvLGc');

DROP TABLE IF EXISTS `category_product`;
CREATE TABLE `category_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `category_product` (`id`, `name`) VALUES
(1,	'Croque-Monsieur'),
(2,	'Accompagnements'),
(3,	'Coté Sucré'),
(4,	'Boissons Fraiches'),
(5,	'Boissons Chaudes');

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20200730114958',	'2020-08-11 11:10:20',	42),
('DoctrineMigrations\\Version20200730115425',	'2020-08-11 11:10:20',	43),
('DoctrineMigrations\\Version20200730122620',	'2020-08-11 11:10:20',	42),
('DoctrineMigrations\\Version20200730123635',	'2020-08-11 11:10:20',	29),
('DoctrineMigrations\\Version20200730123934',	'2020-08-11 11:10:20',	23),
('DoctrineMigrations\\Version20200803083733',	'2020-08-11 11:10:20',	5),
('DoctrineMigrations\\Version20200806082900',	'2020-08-11 11:10:20',	12),
('DoctrineMigrations\\Version20200806155434',	'2020-08-11 11:10:20',	27);

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F5299398A76ED395` (`user_id`),
  CONSTRAINT `FK_F5299398A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `order_line`;
CREATE TABLE `order_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` smallint(6) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9CE58EE14584665A` (`product_id`),
  KEY `IDX_9CE58EE18D9F6D38` (`order_id`),
  CONSTRAINT `FK_9CE58EE14584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FK_9CE58EE18D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D34A04AD12469DE2` (`category_id`),
  CONSTRAINT `FK_D34A04AD12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `product` (`id`, `name`, `description`, `picture`, `price`, `category_id`) VALUES
(1,	'Monsieur Croque',	'Jambon blanc, béchamel maison, fromage Abondance A.O.P',	'https://i.ibb.co/vdwhGFF/Monsieur-Croque.jpg',	7,	1),
(2,	'Le Transformiste',	'Jambon blanc, béchamel maison, fromage Abondance A.O.P,\r\noeuf fermier',	'https://i.ibb.co/Dzn2TJL/Transformiste.jpg',	8,	1),
(3,	'Monsieur Seguin',	'Fromage frais, fromage de chèvre A.O.P, compotée d’oignons\r\nmaison, poire fraîche, noix, miel',	'https://i.ibb.co/m6m1Y9N/Seguin.jpg',	8,	1),
(4,	'Coq Monsieur',	'Poulet label rouge, béchamel maison, coulis de tomate maison,\r\nfromage Abondance A.O.P, compotée d’oignons maison',	'https://i.ibb.co/xDQ8NNP/Coq.jpg',	8,	1),
(5,	'Monsieur Confit',	'Confit de canard du sud-ouest, compotée d’oignons maison,\r\npoire fraîche, fromage Ossau-Iraty A.O.P',	'https://i.ibb.co/6ng6xNF/Confit.jpg',	8,	1),
(6,	'Croque Mystère',	'Croque du moment, voir avec le chef',	NULL,	9,	1),
(7,	'Frites',	NULL,	NULL,	3,	2),
(8,	'Salade',	NULL,	NULL,	3,	2),
(9,	'Légumes',	NULL,	NULL,	3,	2),
(10,	'Coleslaw',	NULL,	NULL,	3,	2),
(11,	'Madame Tarte',	'Tarte du jour',	NULL,	4,	3),
(12,	'Fromage Blanc',	'Coulis: fraise, poire, miel,\r\ncrème de marrons',	NULL,	4,	3),
(13,	'Coca Cola',	'33 cl.',	NULL,	2,	4),
(14,	'Coca Cola light',	'33 cl.',	NULL,	2,	4),
(15,	'Fuzetea',	'33 cl.',	NULL,	2,	4),
(16,	'Sprite',	'33 cl.',	NULL,	2,	4),
(17,	'Minute maid Orange',	'33 cl.',	NULL,	2,	4),
(18,	'Minute maid Pomme',	'33 cl.',	NULL,	2,	4),
(19,	'Minute maid Fruits Rouges',	'33 cl.',	NULL,	2,	4),
(20,	'Abatilles',	'50 cl.',	NULL,	1.9,	4),
(21,	'Abatilles pétillante',	'50 cl.',	NULL,	1.9,	4),
(22,	'Limonade Mira',	'25 cl. \r\nBoisson Artisanale',	NULL,	3.5,	4),
(23,	'Ginger Beer',	'25 cl. \r\nBoisson Artisanale',	NULL,	3.5,	4),
(24,	'Mira',	'Bière Bouteille 33 cl.',	NULL,	3.7,	4),
(25,	'Pip',	'Bière Bouteille 33 cl.',	NULL,	3.7,	4),
(26,	'Vin',	'Bouteille 75 cl.',	NULL,	18,	4),
(27,	'Expresso',	NULL,	NULL,	1.7,	5),
(28,	'Café Long',	NULL,	NULL,	2.2,	5),
(29,	'Cappuccino',	NULL,	NULL,	3.2,	5),
(30,	'Latte Macchiato',	NULL,	NULL,	3.2,	5),
(31,	'Thé',	NULL,	NULL,	3.2,	5);

DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `store` (`id`, `status`) VALUES
(1,	'ouvert'),
(2,	'fermer');

DROP TABLE IF EXISTS `token`;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_5F37A13B642B8210` (`admin_id`),
  CONSTRAINT `FK_5F37A13B642B8210` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `token` (`id`, `admin_id`, `token`) VALUES
(5,	1,	'53c0bb7dae98839fc0910981a09d3519adc1244d71e43f1068453e6b969613f9cb315258f394691d10047da7a5a2eda347bf46a9c44ece74a5ef95e1');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` int(11) NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2020-08-11 09:11:43
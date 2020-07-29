-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `category_product`;
CREATE TABLE `category_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `category_product` (`id`, `name`) VALUES
(1,	'Croque-Monsieur '),
(2,	'Accompagnements '),
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
('DoctrineMigrations\\Version20200724100416',	'2020-07-24 12:04:31',	33),
('DoctrineMigrations\\Version20200724101345',	'2020-07-24 12:13:53',	67),
('DoctrineMigrations\\Version20200724102340',	'2020-07-24 12:23:45',	34),
('DoctrineMigrations\\Version20200724102702',	'2020-07-24 12:27:10',	43),
('DoctrineMigrations\\Version20200724103148',	'2020-07-24 12:32:07',	198),
('DoctrineMigrations\\Version20200724105758',	'2020-07-24 12:58:02',	34),
('DoctrineMigrations\\Version20200724110905',	'2020-07-24 13:09:11',	74);

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` smallint(6) NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `created_at` datetime NOT NULL,
  `order_by_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F5299398297954F9` (`order_by_id`),
  CONSTRAINT `FK_F5299398297954F9` FOREIGN KEY (`order_by_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D34A04AD12469DE2` (`category_id`),
  CONSTRAINT `FK_D34A04AD12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `product` (`id`, `name`, `description`, `picture`, `price`, `category_id`) VALUES
(1,	'Monsieur Croque',	'Jambon blanc, béchamel maison, fromage Abondance A.O.P',	'https://ibb.co/qgyCfSS',	7,	1),
(2,	'Le Transformiste',	'Jambon blanc, béchamel maison, fromage Abondance A.O.P,\r\noeuf fermier',	'https://ibb.co/gmCKh26',	8,	1),
(3,	'Monsieur Seguin',	'Fromage frais, fromage de chèvre A.O.P, compotée d’oignons\r\nmaison, poire fraîche, noix, miel',	'https://ibb.co/MMbWjcB',	8,	1),
(4,	'Coq Monsieur',	'Poulet label rouge, béchamel maison, coulis de tomate maison,\r\nfromage Abondance A.O.P, compotée d’oignons maison',	'https://ibb.co/CzFsffN',	8,	1),
(5,	'Monsieur Confit',	'Confit de canard du sud-ouest, compotée d’oignons maison,\r\npoire fraîche, fromage Ossau-Iraty A.O.P',	'https://ibb.co/0DhPSQr',	8,	1),
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
(28,	'Café Long ',	NULL,	NULL,	2.2,	5),
(29,	'Cappuccino',	NULL,	NULL,	3.2,	5),
(30,	'Latte Macchiato ',	NULL,	NULL,	3.2,	5),
(31,	'Thé',	NULL,	NULL,	3.2,	5);

DROP TABLE IF EXISTS `product_order`;
CREATE TABLE `product_order` (
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`order_id`),
  KEY `IDX_5475E8C44584665A` (`product_id`),
  KEY `IDX_5475E8C48D9F6D38` (`order_id`),
  CONSTRAINT `FK_5475E8C44584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5475E8C48D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` smallint(6) NOT NULL,
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2020-07-27 08:24:58
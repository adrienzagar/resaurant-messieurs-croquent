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
('DoctrineMigrations\\Version20200730114958',	'2020-08-11 12:22:33',	52),
('DoctrineMigrations\\Version20200730115425',	'2020-08-11 12:22:33',	61),
('DoctrineMigrations\\Version20200730122620',	'2020-08-11 12:22:33',	55),
('DoctrineMigrations\\Version20200730123635',	'2020-08-11 12:22:33',	36),
('DoctrineMigrations\\Version20200730123934',	'2020-08-11 12:22:33',	31),
('DoctrineMigrations\\Version20200803083733',	'2020-08-11 12:22:33',	8),
('DoctrineMigrations\\Version20200806082900',	'2020-08-11 12:22:33',	7),
('DoctrineMigrations\\Version20200806155434',	'2020-08-11 12:22:33',	53);

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
(6,	'Croque Mystère',	'Croque du moment, voir avec le chef',	'https://www.flaticon.com/svg/vstatic/svg/0/827.svg?token=exp=1612794229~hmac=3028a5973a8122a518d03c1325806731',	9,	1),
(7,	'Frites',	NULL,	'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?cs=srgb&dl=pexels-dzenina-lukac-1583884.jpg&fm=jpg',	3,	2),
(8,	'Salade',	NULL,	'https://images.pexels.com/photos/9350/salad-restaurant-tomatoes-kitchen.jpg?cs=srgb&dl=pexels-skitterphoto-9350.jpg&fm=jpg',	3,	2),
(9,	'Légumes',	NULL,	'https://images.pexels.com/photos/3985872/pexels-photo-3985872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',	3,	2),
(10,	'Coleslaw',	NULL,	'https://st.depositphotos.com/2938133/4171/i/950/depositphotos_41712745-stock-photo-coleslaw-in-a-bowl-on.jpg',	3,	2),
(11,	'Madame Tarte',	'Tarte du jour',	'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/23559869_1858601737784719_2189068685493830084_n.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=E3NKdUcebJMAX-dvWIW&_nc_ht=scontent-cdt1-1.xx&oh=792f808950b8970d10351ff48f493075&oe=5F5B3628',	4,	3),
(12,	'Fromage Blanc',	'Coulis: fraise, poire, miel,\r\ncrème de marrons',	'https://images.pexels.com/photos/4006362/pexels-photo-4006362.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',	4,	3),
(13,	'Coca Cola',	'33 cl.',	'https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?cs=srgb&dl=pexels-donald-tong-39720.jpg&fm=jpg',	2,	4),
(14,	'Coca Cola light',	'33 cl.',	'https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?cs=srgb&dl=pexels-donald-tong-39720.jpg&fm=jpg',	2,	4),
(15,	'Fuzetea',	'33 cl.',	'https://thumbs.dreamstime.com/z/plastic-bottles-fuze-ice-tea-poznan-pol-oct-soft-drink-brand-sold-beverage-belonging-to-coca-cola-company-164064971.jpg',	2,	4),
(16,	'Sprite',	'33 cl.',	'https://st.depositphotos.com/2121815/4248/i/950/depositphotos_42481083-stock-photo-sprite-drink-in-a-can.jpg',	2,	4),
(17,	'Minute maid Orange',	'33 cl.',	'https://www.clicmarket.fr/4126-large_default/24-canettes-de-minute-maid-orange-24-x-33-cl.jpg',	2,	4),
(18,	'Minute maid Pomme',	'33 cl.',	'https://image.shutterstock.com/image-photo/breda-netherlands-august-26-2018-600w-1185758017.jpg',	2,	4),
(19,	'Minute maid Fruits Rouges',	'33 cl.',	'https://www.lacentraledubureau.com/images/products/60765.jpg',	2,	4),
(20,	'Abatilles',	'50 cl.',	'https://pauillac-traiteur.fr/wp-content/uploads/2017/04/pauillac-traiteur-abatilles-bordeaux-local-abatilles-plate-50cl.jpg',	1.9,	4),
(21,	'Abatilles pétillante',	'50 cl.',	'https://pauillac-traiteur.fr/wp-content/uploads/2017/04/pauillac-traiteur-abatilles-bordeaux-local-abatilles-petillante-50cl-1.jpg',	1.9,	4),
(22,	'Limonade Mira',	'25 cl. \r\nBoisson Artisanale',	'https://brasseriemira.fr/wp-content/uploads/2018/05/limo.jpg',	3.5,	4),
(23,	'Ginger Beer',	'25 cl. \r\nBoisson Artisanale',	'https://www.delidrinks.com/18560-large_default/gingeur-ginger-beer-bouteille-verre-12-x-330ml-bio.jpg',	3.5,	4),
(24,	'Mira',	'Bière Bouteille 33 cl.',	'https://produits.bienmanger.com/36387-0w470h470_Pate_Curry_Rouge_Bio.jpg',	3.7,	4),
(25,	'Pip',	'Bière Bouteille 33 cl.',	'https://produits.bienmanger.com/36387-0w470h470_Pate_Curry_Rouge_Bio.jpg',	3.7,	4),
(26,	'Vin',	'Bouteille 75 cl.',	'https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/335/335/1fbf3ce9178e3a8da664d30da8734f8dc36eb615_7529VBO033556_1.png',	18,	4),
(27,	'Expresso',	NULL,	'https://images.unsplash.com/photo-1596952953996-8f85c385e8d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',	1.7,	5),
(28,	'Café Long',	NULL,	'https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',	2.2,	5),
(29,	'Cappuccino',	NULL,	'https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',	3.2,	5),
(30,	'Latte Macchiato',	NULL,	'https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',	3.2,	5),
(31,	'Thé',	NULL,	'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',	3.2,	5);

DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `store` (`id`, `status`) VALUES
(1,	'OUVERT');

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


-- 2020-08-11 10:23:02
<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200810130724 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE status_order (id INT AUTO_INCREMENT NOT NULL, status VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `order` ADD status_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398881ECFA7 FOREIGN KEY (status_id_id) REFERENCES status_order (id)');
        $this->addSql('CREATE INDEX IDX_F5299398881ECFA7 ON `order` (status_id_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398881ECFA7');
        $this->addSql('DROP TABLE status_order');
        $this->addSql('DROP INDEX IDX_F5299398881ECFA7 ON `order`');
        $this->addSql('ALTER TABLE `order` DROP status_id_id');
    }
}

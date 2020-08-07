<?php

namespace App\Entity;

use App\Entity\Admin;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TokenRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TokenRepository::class)
 */
class Token
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     */
    private $token;

    /**
     * @ORM\ManyToOne(targetEntity=Admin::class, inversedBy="tokens")
     * @ORM\JoinColumn(nullable=false)
     * 
     */
    private $admin;

    public function __construct(Admin $admin)
    {
        $this->token = bin2hex(random_bytes(60));
        $this->admin = $admin;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getAdmin(): ?Admin
    {
        return $this->admin;
    }

    public function setAdmin(?Admin $admin): self
    {
        $this->admin = $admin;

        return $this;
    }

}

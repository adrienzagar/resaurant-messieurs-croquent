<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"products_get" ,"products_get_one" })
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"products_get","products_get_one"})
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"products_get" , "products_get_one"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"products_get","products_get_one"})
     */
    private $picture;

    /**
     * @ORM\Column(type="float")
     * @Groups({"products_get" ,"products_get_one"})
     */
    private $price;

    /**
     * @ORM\ManyToOne(targetEntity=CategoryProduct::class, inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"products_get"})
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity=Order::class, inversedBy="products")
     */
    private $quantity;

    public function __construct()
    {
        $this->quantity = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getCategory(): ?CategoryProduct
    {
        return $this->category;
    }

    public function setCategory(?CategoryProduct $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getQuantity(): Collection
    {
        return $this->quantity;
    }

    public function addQuantity(Order $quantity): self
    {
        if (!$this->quantity->contains($quantity)) {
            $this->quantity[] = $quantity;
        }

        return $this;
    }

    public function removeQuantity(Order $quantity): self
    {
        if ($this->quantity->contains($quantity)) {
            $this->quantity->removeElement($quantity);
        }

        return $this;
    }
}

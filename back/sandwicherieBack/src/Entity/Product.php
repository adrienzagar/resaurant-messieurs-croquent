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
    protected $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"products_get","products_get_one"})
     */
    protected $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"products_get" , "products_get_one"})
     */
    protected $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"products_get","products_get_one"})
     */
    protected $picture;

    /**
     * @ORM\Column(type="float")
     * @Groups({"products_get" ,"products_get_one"})
     */
    protected $price;


    /**
     * @ORM\ManyToOne(targetEntity=CategoryProduct::class, inversedBy="products")
     * @ORM\JoinColumn(name="category_id", nullable=false)
     * @Groups({"products_get", "products_get_one" , "categories_get"})
     */
    protected $category;


    /**
     * @ORM\ManyToMany(targetEntity=Order::class, inversedBy="products"))
     * @ORM\JoinTable(
     *  name="product_order",
     *  joinColumns={
     *      @ORM\JoinColumn(name="product_id", referencedColumnName="id")
     *  },
     *  inverseJoinColumns={
     *      @ORM\JoinColumn(name="order_id", referencedColumnName="id")
     *  }
     * )
     */

    protected $orders;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
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

    public function removeCategory(): self
    {
        $this->category = null;

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrders(Order $orders): self
    {
        if (!$this->orders->contains($orders)) {
            $this->orders[] = $orders;
        }

        return $this;
    }

    public function removeQuantity(Order $orders): self
    {
        if ($this->orders->contains($orders)) {
            $this->orders->removeElement($orders);
        }

        return $this;
    }
}

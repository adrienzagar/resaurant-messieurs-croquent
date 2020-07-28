<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $status;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"order_get" , "order_get_one"})
     */
    private $comment;

    /**
     * @ORM\Column(type="float")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $price;

    /**
     * @ORM\ManyToMany(targetEntity=Product::class, mappedBy="quantity", cascade={"all"})
     * @Groups({"order_get" , "order_get_one"})
     */
    private $products;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="orders", cascade={"all"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"order_get" , "order_get_one"})
     */
    private $orderBy;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

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

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->addQuantity($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            $product->removeQuantity($this);
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getOrderBy(): ?User
    {
        return $this->orderBy;
    }

    public function setOrderBy(?User $orderBy): self
    {
        $this->orderBy = $orderBy;

        return $this;
    }
}

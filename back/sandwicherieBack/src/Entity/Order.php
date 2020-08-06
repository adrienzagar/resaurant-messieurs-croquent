<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
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
     * @ORM\Column(type="integer")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"order_get" , "order_get_one"})
     */
    private $comment;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=OrderLine::class, mappedBy="order", cascade="all")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $orderLines;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="orders", cascade="all")
     * @Groups({"order_get" , "order_get_one"})
     */
    private $user;

    public function __construct()
    {
        $this->orderLines = new ArrayCollection();
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

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

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

    /**
     * @return Collection|OrderLine[]
     */
    public function getOrderLines(): Collection
    {
        return $this->orderLines;
    }

    /**
     * @return Collection|OrderLine[]
    */
    public function getProducts(): Collection
    {
        $lines = $this->getOrderLines();
        $products = new ArrayCollection();
        foreach($lines as $line) {
            $products[] = $line->getProduct();
        }

        return $products;
    }

    public function reloadProducts(Collection $products)
    {
        foreach($products as $product) {
            $this->reloadOrderLineProduct($product);
        }
    }


    public function reloadOrderLineProduct(Product $product)
    {
        //pour chaque ligne de commande
        foreach($this->getOrderLines() as $line) {
            $lineProduct = $line->getProduct();
            //si l'id du  produit associé à la ligne de commande est égal au produit que l'on veut affecter passé en paramètre ; alors nous sommes sur la bonne ligne de commande, peut réaffecter le produit
            if($lineProduct->getId() === $product->getId()) {
                $line->setProduct($product);
                return $this;
            }
        }
        throw new Exception('In ' . Order::class . ' instance ('.$this->getId().') : there is no ' . OrderLine::class . ' with a product_id = "' . $product->getId() .'"');
    }


    public function flushProducts(): self
    {
        $this->product = new ArrayCollection();
        return $this;
    }

    public function addOrderLine(OrderLine $orderLine): self
    {
        if (!$this->orderLines->contains($orderLine)) {
            $this->orderLines[] = $orderLine;
            $orderLine->setOrder($this);
        }

        return $this;
    }

    public function removeOrderLine(OrderLine $orderLine): self
    {
        if ($this->orderLines->contains($orderLine)) {
            $this->orderLines->removeElement($orderLine);
            // set the owning side to null (unless already changed)
            if ($orderLine->getOrder() === $this) {
                $orderLine->setOrder(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
    
}

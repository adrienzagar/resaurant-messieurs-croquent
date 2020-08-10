<?php

namespace App\Entity;

use App\Repository\StatusOrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StatusOrderRepository::class)
 */
class StatusOrder
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity=Order::class, mappedBy="status", orphanRemoval=true)
     */
    private $statusOrder;

    public function __construct()
    {
        $this->statusOrder = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getStatusOrder(): Collection
    {
        return $this->statusOrder;
    }

    public function addStatusOrder(Order $statusOrder): self
    {
        if (!$this->statusOrder->contains($statusOrder)) {
            $this->statusOrder[] = $statusOrder;
            $statusOrder->setStatus($this);
        }

        return $this;
    }

    public function removeStatusOrder(Order $statusOrder): self
    {
        if ($this->statusOrder->contains($statusOrder)) {
            $this->statusOrder->removeElement($statusOrder);
            // set the owning side to null (unless already changed)
            if ($statusOrder->getStatus() === $this) {
                $statusOrder->setStatus(null);
            }
        }

        return $this;
    }
}

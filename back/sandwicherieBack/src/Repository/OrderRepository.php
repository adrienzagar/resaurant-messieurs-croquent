<?php

namespace App\Repository;

use App\Entity\Order;
use App\Entity\Product;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository
{
    

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }


    public function attachOrder(Order $order)
    {
        $productRepository = $this->getEntityManager()->getRepository(Product::class);
        
        //récupération de la liste des produits qu'il faut rattaccher à l'entity manager
        $products = $order->getProducts();
        $attachedProducts = $productRepository->attachProducts($products);
        $order->reloadProducts($attachedProducts);

        return $order;
    }

    // public function attachOrderUser(Order $order)
    // {
    //     $userRepository = $this->getEntityManager()->getRepository(User::class);
        
    //     //récupération de la liste des user qu'il faut rattaccher à l'entity manager
    //     $user = $order->getUser();
    //     $attachedUser = $userRepository->attachUser($user);
    //     $order->reloadUser($attachedUser);

    //     return $order;
    // }


    // /**
    //  * @return Order[] Returns an array of Order objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Order
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

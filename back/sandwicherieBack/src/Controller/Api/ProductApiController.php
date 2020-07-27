<?php

namespace App\Controller\Api;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProductApiController extends AbstractController
{
    /**
     * @Route("/api/products", name="api_products_get", methods={"GET"})
     */
    public function getAll(ProductRepository $productRepository)
    {
        $products = $productRepository->findAll();

        
        return  $this->json($products, 200 ,[] , ["groups"=>"products_get"]);

        
    }

    /**
     * @Route("/api/products/{id}", name="api_products_get_one", methods={"GET"})
     */
    public function getOne($id, ProductRepository $productRepository)
    {
        $products = $productRepository->find($id);

        
        return  $this->json($products, 200 ,[] , ["groups"=>"products_get_one"]);

        
    }

}

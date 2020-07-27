<?php

namespace App\Controller\Api;

use App\Entity\CategoryProduct;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\CategoryProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryProductApiController extends AbstractController
{
    /**
     * @Route("/api/categories/", name="api_categories_get", methods="GET")
     */
    public function getAll(CategoryProductRepository $categoryProductRepository)
    {
        $categories = $categoryProductRepository->findAll();


        return  $this->json($categories, 200, [], ["groups" => "categories_get"]);
    }

    /**
     * @Route("/api/categories/{id}", name="api_categories_get_one", methods={"GET"})
     */
    public function getOne(CategoryProduct $categories = null, $id, CategoryProductRepository $categoryProductRepository)
    {
        // 404 ?
        if ($categories === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Catégorie non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $products = $categoryProductRepository->find($id);


        return  $this->json($categories, 200, [], ["groups" => "categories_get_one"]);
    }

    

    /** 
     * Delete category
     * 
     * @Route("/api/categories/{id<\d+>}", name="api_categories_delete", methods={"DELETE"})
     */
    public function delete(CategoryProduct $category = null, EntityManagerInterface $em)
    {
        // 404 ?
        if ($category === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Catégorie non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($category);
        $em->flush();

        return $this->json(['message' => 'Catégorie supprimée.'], Response::HTTP_OK);
    }

}

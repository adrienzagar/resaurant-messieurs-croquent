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
     * @Route("/api/categories", name="api_categories_get", methods="GET")
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
     * Add Category
     * 
     * @Route("/api/categories",name="api_categories_post", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        

        // On déserialise notre JSON en entité Doctrine
        $category = $serializer->deserialize($content, CategoryProduct::class, 'json');


        // Valider l'entité avec le service Validator
        $errors = $validator->validate($category);

        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);

        }

        // Flusher via le manager
        $entityManager->persist($category);
        $entityManager->flush();

        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_products_get_one', ['id' => $category->getId()], Response::HTTP_CREATED);
    }

    /**
     * Edit Product (PUT)
     * 
     * @Route("/api/categories/{id<\d+>}", name="api_categories_put", methods={"PUT"})
     * @Route("/api/categories/{id<\d+>}", name="api_categories_patch", methods={"PATCH"})
     */
    public function put(CategoryProduct $category = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request)
    {
        
    
        if ($category === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Catégorie non trouvée.'], Response::HTTP_NOT_FOUND);
        }

        $updatedData = $serializer->deserialize($request->getContent(), CategoryProduct::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $category]);

        $em->flush();

        return $this->json(['message' => 'Catégorie modifiée.'], Response::HTTP_OK);
    }

    /** 
     * Delete category
     * 
     * @Route("/api/categories/{id<\d+>}", name="api_categories_delete", methods={"DELETE"})
     */
    public function delete(CategoryProduct $category = null, EntityManagerInterface $em)
    {
        
        if ($category === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Catégorie non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($category);
        $em->flush();

        return $this->json(['message' => 'Catégorie supprimée.'], Response::HTTP_OK);
    }

}

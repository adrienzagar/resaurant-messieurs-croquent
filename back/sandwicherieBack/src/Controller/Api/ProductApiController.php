<?php

namespace App\Controller\Api;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProductApiController extends AbstractController
{
    /**
     * @Route("/api/products", name="api_products_get", methods={"GET"})
     */
    public function getAll(ProductRepository $productRepository)
    {
        $products = $productRepository->findAll();


        return  $this->json($products, 200, [], ["groups" => "products_get"]);
    }

    /**
     * @Route("/api/products/{id}", name="api_products_get_one", methods={"GET"})
     */
    public function getOne(Product $product = null, $id, ProductRepository $productRepository)
    {
        // 404 ?
        if ($product === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Produit non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $products = $productRepository->find($id);


        return  $this->json($products, 200, [], ["groups" => "products_get_one"]);
    }

    /**
     * Add Product
     * 
     * @Route("/api/products", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        

        // On déserialise notre JSON en entité Doctrine
        $product = $serializer->deserialize($content, Product::class, 'json');


        // Valider l'entité avec le service Validator
        $errors = $validator->validate($product);

        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);

        }

        // Flusher via le manager
        $entityManager->persist($product);
        $entityManager->flush();

        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_products_get_one', ['id' => $product->getId()], Response::HTTP_CREATED);
    }

    /**
     * Edit Product (PUT)
     * 
     * @Route("/api/products/{id<\d+>}", name="api_products_put", methods={"PUT"})
     * @Route("/api/products/{id<\d+>}", name="api_products_patch", methods={"PATCH"})
     */
    public function put(Product $product = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request)
    {
        // 1. On souhaite modifier le film dont l'id est transmis via l'URL

        // 404 ?
        if ($product === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Film non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        // 2. On va devoir associer les données JSON reçues sur l'entité existante
        // On désérialise les données reçues depuis le front ($request->getContent())... 
        // ... dans l'objet Movie à modifier
        // @see https://symfony.com/doc/current/components/serializer.html#deserializing-in-an-existing-object
        $updatedData = $serializer->deserialize($request->getContent(), Product::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $product]);

        $em->flush();

        return $this->json(['message' => 'Produit modifié.'], Response::HTTP_OK);
    }

    /** 
     * Delete product
     * 
     * @Route("/api/products/{id<\d+>}", name="api_products_delete", methods={"DELETE"})
     */
    public function delete(Product $product = null, EntityManagerInterface $em)
    {
        // 404 ?
        if ($product === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Produit non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($product);
        $em->flush();

        return $this->json(['message' => 'Produit supprimé.'], Response::HTTP_OK);
    }

}

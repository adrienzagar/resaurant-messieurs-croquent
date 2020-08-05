<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class OrderApiController extends AbstractController
{
     /**
     * @Route("/api/order", name="api_order_get", methods={"GET"})
     */
    public function getAll(OrderRepository $orderRepository)
    {
        $order = $orderRepository->findAll();


        return  $this->json($order, 200, [], ["groups" => "order_get"]);
    }

    /**
     * @Route("/api/order/{id}", name="api_order_get_one", methods={"GET"})
     */
    public function getOne(Order $order = null, $id, OrderRepository $orderRepository)
    {
        // 404 ?
        if ($order === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Commande non trouvée.'], Response::HTTP_NOT_FOUND);
        }
        $order = $orderRepository->find($id);


        return  $this->json($order, 200, [], ["groups" => "order_get_one"]);
    }

    /**
     * Add Order
     * 
     * @Route("/api/order", name="api_order_post", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {

        $orderRepository = $entityManager->getRepository(Order::class);

        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();
       
        // On déserialise notre JSON en entité Doctrine

        $order = $serializer->deserialize($content, Order::class, 'json');
        //$order = $serializer->deserialize($content, Order::class. '[]', 'json'); si recuperation d'un tableau
        // Valider l'entité avec le service Validator
        $errors = $validator->validate($order);


        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $order->setCreatedAt(new \Datetime());

        $attachedOrder = $orderRepository->attachOrder($order);

        // Flusher via le manager
        $entityManager->persist($attachedOrder);
        $entityManager->flush();


        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_order_get_one', ['id' => $order->getId()], Response::HTTP_CREATED);
    }

    /**
     * Edit Order (PUT)
     * 
     * @Route("/api/order/{id<\d+>}", name="api_order_put", methods={"PUT"})
     * @Route("/api/order/{id<\d+>}", name="api_order_patch", methods={"PATCH"})
     */
    public function put(Order $order = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request)
    {
      
        if ($order === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Commande non trouvée.'], Response::HTTP_NOT_FOUND);
        }

        $updatedData = $serializer->deserialize($request->getContent(), Order::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $order]);

        $em->flush();

        return $this->json(['message' => 'Commande modifiée.'], Response::HTTP_OK);
    }

    /** 
     * Delete order
     * 
     * @Route("/api/order/{id<\d+>}", name="api_order_delete", methods={"DELETE"})
     */
    public function delete(Order $order = null, EntityManagerInterface $em)
    {
     
        if ($order === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Commande non trouvée.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($order);
        $em->flush();

        return $this->json(['message' => 'Commande supprimée.'], Response::HTTP_OK);
    }
}


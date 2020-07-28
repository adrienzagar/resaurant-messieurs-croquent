<?php
namespace App\Controller\Api;
use App\Entity\Order;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
class OrderApiController extends AbstractController
{
    /**
     * @Route("/api/order", name="api_order_get", methods="GET")
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
        return  $this->json($order, 200, [], ["groups" => "order_get"]);
    }
    /**
     * Add Order
     *
     * @Route("/api/order",name="api_order_post", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();
        // On déserialise notre JSON en entité Doctrine
        $order = $serializer->deserialize($content, Order::class, 'json');
        // Valider l'entité avec le service Validator
        $errors = $validator->validate($order);
        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        // Flusher via le manager
        $entityManager->persist($order);
        $entityManager->flush();
        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_order_get_one', ['id' => $order->getId()], Response::HTTP_CREATED);
    }
}
<?php

namespace App\Controller\Api;

use App\Entity\Store;
use App\Repository\StoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StoreApiController extends AbstractController
{
    /**
     * @Route("/api/store/{id}", name="api_store_get_one", methods={"GET"})
     */
    public function getOne(Store $store = null, $id, StoreRepository $storeRepository)
    {
       
        $store = $storeRepository->find($id);

        return  $this->json($store, 200, [], ["groups" => "api_store_get_one"]);
    }

    /**
     * Edit Order (PUT)
     * 
     * @Route("/api/store/{id<\d+>}", name="api_store_put", methods={"PUT"})
     * 
     */
    public function put(Store $store = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request)
    {
      
        $updatedData = $serializer->deserialize($request->getContent(), Store::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $store]);

        $em->flush();

        return $this->json(['message' => 'Status modifiée.'], Response::HTTP_OK);
    }

}

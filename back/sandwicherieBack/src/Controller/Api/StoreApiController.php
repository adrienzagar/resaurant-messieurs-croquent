<?php

namespace App\Controller\Api;

use App\Entity\Store;
use App\Repository\StoreRepository;
use Symfony\Component\Routing\Annotation\Route;
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
}

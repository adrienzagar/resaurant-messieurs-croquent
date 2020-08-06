<?php

namespace App\Controller\Api;


use App\Entity\Token;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityApiController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(Request $request, EntityManagerInterface $em)
    {
        $user = $this->getUser();

       // dd($user);

        // https://github.com/O-clock-Fantasy/Symfo-API-Token-Based-Auth

        $token = new Token($user);
        $em->persist($token);
        $em->flush();


        return $this->json([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
            'token' => $token->getToken()
        ]);
    }

    /**
     * @Route("/api/logout", name="api_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}

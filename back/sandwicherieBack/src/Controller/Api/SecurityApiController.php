<?php

namespace App\Controller\Api;

use App\Entity\Token;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityApiController extends AbstractController
{
    
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(Request $request,EntityManagerInterface $em)
    {
        $user = $this->getUser();
    
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
     * @Route("/api/logout", name="api_logout", methods={"GET"})
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
   * @Route("/api/logged", name="api_logged", methods={"POST"})
   */
  public function logged()
  {
	  $user = $this->getUser();
	  
	  if(!$user) {
		  return $this->json(['logged' => false, 'info' => ['username' => null]]);
	  }

	  return $this->json(['logged' => true, 'info' => ['username' => $user->getUsername()]]);
  }
}

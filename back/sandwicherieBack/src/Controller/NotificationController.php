<?php

namespace App\Controller;

use App\Entity\Order;
use Doctrine\ORM\EntityManager;
use App\Repository\OrderRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class NotificationController extends AbstractController
{

    /**
     * @Route("notification/validate", name="notification_validate")
    */
    public function sendEmail(MailerInterface $mailer)
    {
        
        //On récupére l'order grâce au ParamConverter (https://symfony.com/doc/current/doctrine.html#automatically-fetching-objects-paramconverter)
        // On récupére le user dans order
        // On récupére l'émail du User
        // $order->getUser()->getEmail();  
        //dd ($order);

        $email = (new TemplatedEmail())
            ->from('messieurscroquent@gmail.com')
            ->to('adrien.zagar@gmail.com')
            ->subject('Votre Commande Messieurs Croquent')
            ->htmlTemplate('notification/orderValidate.html.twig');

        $mailer->send($email);

        return $this->redirectToRoute('api_order_get');
    }

    /**
     * @Route("notification/canceled", name="notification_canceled")
     */
    public function sendEmail2(MailerInterface $mailer )
    {
        

        $email = (new TemplatedEmail())
            ->from('messieurscroquent@gmail.com')
            ->to('adrien.zagar@gmail.com')
            ->subject('Votre Commande Messieurs Croquent')
            ->htmlTemplate('notification/orderCanceled.html.twig');

        $mailer->send($email);

        return $this->redirectToRoute('api_order_get');
    }
}

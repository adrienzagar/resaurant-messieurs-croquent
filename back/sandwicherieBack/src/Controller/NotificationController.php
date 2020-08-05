<?php

namespace App\Controller;


use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NotificationController extends AbstractController
{
    /**
     * @Route("/notification/validate", name="notification")
     */
    public function sendEmail(MailerInterface $mailer)
    {
        $email = (new TemplatedEmail())
            ->from('messieurscroquent@gmail.com')
            ->to('adrien.zagar@gmail.com')
            ->subject('Votre Commande Messieurs Croquent')
            ->htmlTemplate('notification/orderValidate.html.twig');

        $mailer->send($email);

        return $this->redirectToRoute('api_order_get');
    }
}

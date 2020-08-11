<?php
namespace App\EventListener;
use App\Entity\Order;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;

class OrderListener
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendEmailOnOrder(Order $order, LifecycleEventArgs $event)
    {
        $userEmail = $order->getUser()->getEmail();
        $email = (new TemplatedEmail())
        ->from('messieurscroquent@gmail.com')
        ->to($userEmail )
        ->subject('Votre Commande Messieurs Croquent')
        ->htmlTemplate('notification/orderValidate.html.twig');
        $this->mailer->send($email);

    }

    

}
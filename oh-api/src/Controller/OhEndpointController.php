<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as FOSRest;
use App\Entity\Article;

/**
 * Brand controller.
 *
 * @Route("/api")
 */
class OhEndpointController extends Controller
{

  /**
   * Gets all the stats at once.
   *
   * @FOSRest\Get("/ping")
   *
   * @return \FOS\RestBundle\View\View
   *   The created REST View.
   */
  public function getPingResult() {
    $result = [
      'didItWork' => TRUE,
      'reason' => 'Symfony is easy',
    ];
    return View::create($result, Response::HTTP_OK, []);
  }

}
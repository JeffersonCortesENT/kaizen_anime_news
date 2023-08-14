<?php
namespace App\Http\Controllers\Rest;

use App\Http\Requests\SearchAnimeRequest;
use App\Services\AnimeService;

class AnimeController
{
  private $oAnnService;

  public function __construct(AnimeService $oAnnService)
  {
    $this->oAnnService = $oAnnService;
  }

  public function fetchUpcoming()
  {
    $aResponse = $this->oAnnService->fetchUpcoming();
    return response()->json($aResponse);
  }

  public function fetchAnimeNews()
  {
    $aResponse = $this->oAnnService->fetchAnimeNews();
    return response()->json($aResponse);
  }

  public function fetchTop10Seasonal()
  {
    $aResponse = $this->oAnnService->fetchTop10Seasonal();
    return response()->json($aResponse);
  }

  public function fetchTop10Anime()
  {
    $aResponse = $this->oAnnService->fetchTop10Anime();
    return response()->json($aResponse);
  }

  public function fetchSearchAnime(SearchAnimeRequest $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimeSearch($oRequest->all());
    return response()->json($aResponse);
  }
}

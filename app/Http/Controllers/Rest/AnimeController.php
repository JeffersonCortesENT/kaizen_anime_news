<?php
namespace App\Http\Controllers\Rest;

use App\Constants\AppConstants;
use App\Http\Requests\AnimeDetailsRequest;
use App\Http\Requests\SearchAnimeRequest;
use App\Services\AnimeService;
use Illuminate\Http\Request;

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

  public function fetchAnimeFull(AnimeDetailsRequest $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimeFull($oRequest->all()[AppConstants::MAL_ID]);
    return response()->json($aResponse);
  }

  public function fetchAnimeCharacters(AnimeDetailsRequest $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimeCharacters($oRequest->all()[AppConstants::MAL_ID]);
    return response()->json($aResponse);
  }

  public function fetchAnimeStaff(AnimeDetailsRequest $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimeStaff($oRequest->all()[AppConstants::MAL_ID]);
    return response()->json($aResponse);
  }

  public function fetchAnimePictures(AnimeDetailsRequest $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimePictures($oRequest->all()[AppConstants::MAL_ID]);
    return response()->json($aResponse);
  }
}

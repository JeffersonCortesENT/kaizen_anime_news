<?php
namespace App\Http\Controllers\Rest;

use App\Constants\AppConstants;
use App\Services\AnimeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AnimeController
{
  private $oAnnService;

  public function __construct(AnimeService $oAnnService)
  {
    $this->oAnnService = $oAnnService;
  }

  public function fetchUpcoming(Request $oRequest)
  {
    $aResponse = $this->oAnnService->fetchUpcoming($oRequest->all());
    return response()->json($aResponse);
  }

  public function fetchAnimeNews(Request $oRequest)
  {
    $aResponse = $this->oAnnService->fetchAnimeNews($oRequest->all());
    return response()->json($aResponse);
  }

  public function fetchTop10Seasonal(Request $oRequest)
  {
    $aResponse = $this->oAnnService->fetchTop10Seasonal($oRequest->all());
    return response()->json($aResponse);
  }

  public function fetchTop10Anime(Request $oRequest)
  {
    $aResponse = $this->oAnnService->fetchTop10Anime($oRequest->all());
    return response()->json($aResponse);
  }
}

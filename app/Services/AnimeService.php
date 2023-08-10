<?php
namespace App\Services;

use App\Constants\ApiConstants;
use App\Library\RequestLibrary;
use Jikan\MyAnimeList\MalClient;
use \Jikan\Helper\Constants;

class AnimeService
{
  private $oJikan;

  private $sMALNewsEndpoint = 'https://myanimelist.net/rss/news.xml';

  public function __construct()
  {
    $this->oJikan = new MalClient();
  }

  public function fetchUpcoming()
  {
    $aUpcoming = RequestLibrary::getRequest('https://api.jikan.moe/v4/seasons/upcoming', [
      ApiConstants::LIMIT => 10,
    ]);

    return [
      ApiConstants::CODE => $aUpcoming[ApiConstants::CODE],
      ApiConstants::DATA => $aUpcoming[ApiConstants::DATA]
    ];
  }

  public function fetchAnimeNews()
  {
    // Load the XML file
    $oResponse = @simplexml_load_file($this->sMALNewsEndpoint);
    if ($oResponse === false) {
      return RequestLibrary::SERVER_ERROR;
    }

    // Initialize an array to store the extracted data
    $aExtractedData = [];

    // Traverse the XML structure and extract the necessary information
    foreach ($oResponse->channel->item as $aItem) {
      $thumbnailUrl = (string) $aItem->children('media', true)->thumbnail;
    
      $aData = [
          'title' => (string) $aItem->title,
          'link' => (string) $aItem->link,
          'description' => (string) $aItem->description,
          'thumbnail' => $thumbnailUrl
      ];

      $aExtractedData[] = $aData;
    }

    return [
      ApiConstants::CODE => 200,
      ApiConstants::DATA => $aExtractedData
    ];
  }

  public function fetchTop10Seasonal()
  {
    $aTop10Seasonal = RequestLibrary::getRequest('https://api.jikan.moe/v4/seasons/now', [
      ApiConstants::LIMIT => 10,
    ]);

    return [
      ApiConstants::CODE => $aTop10Seasonal[ApiConstants::CODE],
      ApiConstants::DATA => $aTop10Seasonal[ApiConstants::DATA]
    ];
  }

  public function fetchTop10Anime()
  {
    $aTop10Anime = RequestLibrary::getRequest('https://api.jikan.moe/v4/top/anime', [
      ApiConstants::LIMIT => 10,
    ]);

    return [
      ApiConstants::CODE => $aTop10Anime[ApiConstants::CODE],
      ApiConstants::DATA => $aTop10Anime[ApiConstants::DATA]
    ];
  }

  public function fetchAnimeSearch(array $aParameters)
  {
    $aTop10Anime = RequestLibrary::getRequest('https://api.jikan.moe/v4/anime', $aParameters);

    return [
      ApiConstants::CODE => $aTop10Anime[ApiConstants::CODE],
      ApiConstants::DATA => $aTop10Anime[ApiConstants::DATA]
    ];
  }
}

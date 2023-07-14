<?php
namespace App\Library;

use App\Constants\ApiConstants;
use Illuminate\Support\Facades\Http;

class RequestLibrary
{
  public const SERVER_ERROR = [
    ApiConstants::CODE     => 500,
    ApiConstants::MESSAGE  => ApiConstants::MESSAGE_ERROR
  ];

  public static function getRequest(string $sUri,  array $aParameters = [])
  {
    $oResponse = Http::get($sUri, $aParameters);
    if ($oResponse->ok() === false || $oResponse->status() !== 200) {
      return self::SERVER_ERROR;
    }

    return [
      ApiConstants::CODE => 200,
      ApiConstants::DATA => $oResponse->json(),
    ];
  }

  public static function getXMLRequest(string $sUri)
  {
    // Load the XML file
    $oResponse = @simplexml_load_file($sUri);
    if ($oResponse === false) {
      return self::SERVER_ERROR;
    }

    return [
      ApiConstants::CODE => 200,
      ApiConstants::DATA => $oResponse,
    ];
  }
}

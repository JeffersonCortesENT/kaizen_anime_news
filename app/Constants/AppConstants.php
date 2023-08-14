<?php
namespace App\Constants;

class AppConstants
{
  //Common
  public const CREATED_AT = 'created_at';
  public const UPDATED_AT = 'updated_at';
  public const STATUS = 'status';
  public const RESPONSE = 'response';
  public const REQUEST_ERROR = 'A request error occured!';
  public const REQUEST_SUCCESS = 'Request Successful!';

  //Jikan
  public const JIKAN_VERSION = '/v4';
  public const JIKAN_API_URL = 'https://api.jikan.moe';

  //Common GET Parameters
  public const ORDER_BY = 'order_by';
  public const SORT = 'sort';
  public const LIMIT = 'limit';
  public const PAGE = 'page';
  public const ASC = 'asc';
  public const DESC = 'desc';

  //Search Anime Parameters
  public const TYPE = 'type';
  public const RATING = 'rating';
  public const Q = 'q';

  //Order by Values
  public const MAL_ID = 'mal_id';
  public const TITLE = 'title';
  public const START_DATE = 'start_date';
  public const END_DATE = 'end_date';
  public const EPISODES = 'episodes';
  public const SCORE = 'score';
  public const SCORED_BY = 'scored_by';
  public const RANK = 'rank';
  public const POPULARITY = 'popularity';
  public const MEMBERS = 'members';
  public const FAVORITES = 'favorites';

  //Type Values
  public const TV = 'tv';
  public const MOVIE = 'movie';
  public const OVA = 'ova';
  public const SPECIAL = 'special';
  public const ONA = 'ona';
  public const MUSIC = 'music';

  //Status Values
  public const AIRING = 'airing';
  public const COMPLETE = 'complete';
  public const RUNNING = 'running';

  //Rating Values
  public const G = 'g';
  public const PG = 'pg';
  public const PG13 = 'pg13';
  public const R17 = 'r17';
  public const R = 'r';
  public const RX = 'rx';

  public const SORT_VALUES = [
    self::ASC,
    self::DESC,
  ];

  public const ORDER_BY_VALUES = [
    self::MAL_ID,
    self::TITLE,
    self::START_DATE,
    self::END_DATE,
    self::EPISODES,
    self::SCORE,
    self::RANK,
    self::POPULARITY,
    self::MEMBERS,
    self::FAVORITES,
  ];

  public const TYPE_VALUES = [
    self::TV,
    self::MOVIE,
    self::OVA,
    self::SPECIAL,
    self::ONA,
    self::MUSIC,
  ];

  public const STATUS_VALUES = [
    self::AIRING,
    self::COMPLETE,
    self::RUNNING,
  ];

  public const RATING_VALUES = [
    self::G,
    self::PG,
    self::PG13,
    self::R17,
    self::R,
    self::RX,
  ];
}
<?php
namespace App\Constants;

class ApiConstants
{
  //Common
  public const CREATED_AT = 'created_at';
  public const UPDATED_AT = 'updated_at';
  public const STATUS = 'status';
  public const RESPONSE = 'response';
  public const ERROR = 'error';
  public const CODE = 'code';
  public const MESSAGE = 'message';
  public const DATA = 'data';
  public const PAGE = 'page';
  public const LIMIT = 'limit';
  public const SORT = 'sort';
  public const ASC = 'asc';
  public const DESC = 'desc';
  public const ORDER_BY = 'order_by';

  //Status Codes
  public const SUCCESS_CODE = 200;
  public const FORBIDDEN_CODE = 403;
  public const SERVER_ERROR_CODE = 500;

  //Messages
  public const MESSAGE_ERROR = 'An error occured!';
  public const MESSAGE_SUCCESS = 'Success!';
}
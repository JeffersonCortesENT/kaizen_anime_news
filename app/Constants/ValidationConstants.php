<?php
namespace App\Constants;

class ValidationConstants
{
  //Common
  public const DIVIDER = '|';
  public const REQUIRED = 'required';
  public const STRING = 'string';
  public const ARRAY = 'array';
  public const IN = 'in:';
  public const DATE_FORMAT = 'date_format:';
  public const STANDARD_DATE_FORMAT = 'Y-m-d';
  public const NULLABLE = 'nullable';
  public const INTEGER = 'integer';
  public const DATE = self::DATE_FORMAT. self::STANDARD_DATE_FORMAT;
}
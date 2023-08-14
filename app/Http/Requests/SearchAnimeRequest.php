<?php

namespace App\Http\Requests;

use App\Constants\AppConstants;
use App\Constants\ValidationConstants;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SearchAnimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            AppConstants::PAGE     => [ValidationConstants::REQUIRED, ValidationConstants::INTEGER],
            AppConstants::ORDER_BY => [ValidationConstants::NULLABLE, Rule::in(AppConstants::ORDER_BY_VALUES)],
            AppConstants::TYPE     => [ValidationConstants::NULLABLE, Rule::in(AppConstants::TYPE_VALUES)],
            AppConstants::STATUS   => [ValidationConstants::NULLABLE, Rule::in(AppConstants::STATUS_VALUES)],
            AppConstants::RATING   => [ValidationConstants::NULLABLE, Rule::in(AppConstants::RATING_VALUES)],
            AppConstants::LIMIT    => [ValidationConstants::REQUIRED, ValidationConstants::INTEGER],
            AppConstants::Q        => [ValidationConstants::NULLABLE, ValidationConstants::STRING],
            AppConstants::SORT     => [ValidationConstants::NULLABLE, Rule::in(AppConstants::SORT_VALUES)],
        ];
    }
}

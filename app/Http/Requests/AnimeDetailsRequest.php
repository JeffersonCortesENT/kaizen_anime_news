<?php

namespace App\Http\Requests;

use App\Constants\AppConstants;
use App\Constants\ValidationConstants;
use Illuminate\Foundation\Http\FormRequest;

class AnimeDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            AppConstants::MAL_ID => $this->route(AppConstants::MAL_ID),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            AppConstants::MAL_ID => [ValidationConstants::REQUIRED, ValidationConstants::INTEGER]
        ];
    }
}

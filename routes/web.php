<?php

use App\Http\Controllers\Rest\AnimeController;
use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/get-upcoming', [AnimeController::class, 'fetchUpcoming']);
Route::get('/get-anime-news', [AnimeController::class, 'fetchAnimeNews']);
Route::get('/get-top10-seasonal', [AnimeController::class, 'fetchTop10Seasonal']);
Route::get('/get-top10-anime', [AnimeController::class, 'fetchTop10Anime']);
Route::get('/get-anime-search', [AnimeController::class, 'fetchSearchAnime']);
Route::get('/get-anime-full/{mal_id}', [AnimeController::class, 'fetchAnimeFull']);
Route::get('/get-anime-chars/{mal_id}', [AnimeController::class, 'fetchAnimeCharacters']);
Route::get('/get-anime-staff/{mal_id}', [AnimeController::class, 'fetchAnimeStaff']);
Route::get('/get-anime-pictures/{mal_id}', [AnimeController::class, 'fetchAnimePictures']);

//This set's up routes from React to main view. Don't relocate code section above rest routes!
Route::view('/{path?}', 'main')
           ->where('path', '.*')
           ->name('react');

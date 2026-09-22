<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('tasks', 'tasks')->name('tasks');
    Route::inertia('apps', 'apps')->name('apps');
    Route::inertia('chats', 'chats')->name('chats');
    Route::inertia('users', 'users')->name('users');
    Route::inertia('help-center', 'help-center')->name('help-center');

    Route::prefix('errors')->group(function () {
        Route::inertia('unauthorized', 'errors/unauthorized');
        Route::inertia('forbidden', 'errors/forbidden');
        Route::inertia('not-found', 'errors/not-found');
        Route::inertia('internal-server-error', 'errors/internal-server-error');
        Route::inertia('maintenance', 'errors/maintenance');
    });
});

require __DIR__.'/settings.php';

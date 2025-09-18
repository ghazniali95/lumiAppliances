<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */



    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Adjust as needed

    'allowed_methods' => ['*'], // allow all HTTP methods (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => [
        'https://www.constructy.co.nz',  // ✅ whitelist your API domain
        'http://localhost:8000',         // ✅ whitelist your local frontend dev server
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // allow all headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];

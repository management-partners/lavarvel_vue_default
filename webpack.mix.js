const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// frontend script
mix.js('resources/js/frontend/app.js', 'public/js')
    .sass('resources/sass/frontend/app.scss', 'public/css');
// backend script
mix.js('resources/js/backend/app.js', 'public/backend/js')
    .sass('resources/sass/backend/app.scss', 'public/backend/css');
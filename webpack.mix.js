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

// mix.sass('resources/sass/frontend/app.scss', 'public/css')
    // .js('resources/js/frontend/app.js', 'public/js');

mix
    // .sass('resources/sass/frontend/app.scss', 'public/css')
    // .js('resources/js/frontend/app.js', 'public/js');
    .sass('resources/sass/backend/admin.scss', 'public/backend/css')
    .js('resources/js/backend/admin.js', 'public/backend/js')
    .copy('node_modules/jquery/dist/jquery.min.js', 'public/backend/js')
    .copy('node_modules/jquery-ui-dist/jquery-ui.min.js', 'public/backend/js')
    .copy('node_modules/jquery-ui-dist/jquery-ui.min.css', 'public/backend/css')
    // .copy('node_modules/moment/min/moment.min.js', 'public/backend/js')
    // .copy('node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js', 'public/backend/js')
    // .copy('node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css', 'public/backend/css')
    // .copy('node_modules/summernote/dist/summernote-bs4.min.js', 'public/backend/js')
    // .copy('node_modules/summernote/dist/summernote-bs4.min.css', 'public/backend/css')
    // .copy('node_modules/chart.js/dist/Chart.min.js', 'public/backend/js')
    // .copy('node_modules/chart.js/dist/Chart.min.css', 'public/backend/css')
    // .copy('node_modules/sparklines/source/sparkline.js', 'public/backend/js')
    // .copy('node_modules/jquery-knob-chif/dist/jquery.knob.min.js', 'public/backend/js')
    // .copy('node_modules/daterangepicker/daterangepicker.css', 'public/backend/css')
    // .copy('node_modules/daterangepicker/daterangepicker.js', 'public/backend/js')
    // .copy('node_modules/overlayScrollbars/js/jquery.overlayScrollbars.min.js', 'public/backend/js')
    .copy('node_modules/icheck-bootstrap/icheck-bootstrap.min.css', 'public/backend/css');
    // .copy('node_modules/jqvmap-novulnerability/dist/jquery.vmap.min.js', 'public/backend/js')
    // .copy('node_modules/jqvmap-novulnerability/dist/jqvmap.min.css', 'public/backend/css')
    // .copy('node_modules/jquery/jquery.min.js', 'public/backend/js')
    // .copy('node_modules/jqvmap-novulnerability/dist/maps/jquery.vmap.usa.js', 'public/backend/js');
    
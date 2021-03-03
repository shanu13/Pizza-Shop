let mix = require('laravel-mix');

mix.js('resources/js/client.js', 'public/js/client.js').sass('resources/scss/style.scss','public/css/style.css'); // 'which file to compile','where to save compiled file 
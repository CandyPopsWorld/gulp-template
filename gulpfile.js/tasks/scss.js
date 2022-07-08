const gulp = require("gulp");

// Плагины
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const autoprefixer = require('gulp-autoprefixer'); // Плагин для добавления префиксов к css
const csso = require('gulp-csso'); // Плагин для сжатия css
const rename = require('gulp-rename'); // Плагин для переименования файла
const size = require('gulp-size'); // Плагин для отображения размера файла
const short = require('gulp-shorthand'); //Плагин для сокращения (css - возможно и других языков)
const sass = require('gulp-sass')(require('sass'));
const webpcss = require('gulp-webp-css'); //Плагин для добавления конструкций для webp в css

//Конфигурация
const path = require('../config/path');

const scss = ()=>{
    return gulp.src(path.scss.src,{sourcemaps: true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'SCSS',
            message: error.message
        }))
    }))
    .pipe(sass())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(short())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: true}))
    .pipe(size({title: 'Обычный scss'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(size({title: 'Сжатый scss'}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: true}));
};

module.exports = scss;
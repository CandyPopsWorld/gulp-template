const gulp = require("gulp");

// Плагины
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const concat = require('gulp-concat'); // Плагин для обьединение файлов
const autoprefixer = require('gulp-autoprefixer'); // Плагин для добавления префиксов к css
const csso = require('gulp-csso'); // Плагин для сжатия css
const rename = require('gulp-rename'); // Плагин для переименования файла
const size = require('gulp-size'); // Плагин для отображения размера файла
const short = require('gulp-shorthand'); //Плагин для сокращения (css - возможно и других языков)

//Конфигурация
const path = require('../config/path');

const css = ()=>{
    return gulp.src(path.css.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'CSS',
            message: error.message
        }))
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(short())
    .pipe(gulp.dest(path.css.dest, {sourcemaps: true}))
    .pipe(size({title: 'Обычный css'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(size({title: 'Сжатый css'}))
    .pipe(gulp.dest(path.css.dest, {sourcemaps: true}));
};

module.exports = css;
const gulp = require('gulp');
//Плагины
const fileInclude = require('gulp-file-include'); // Плагин для шаблонизации
const htmlmin = require('gulp-htmlmin'); // Плагин для сжатия файлов
const size = require('gulp-size'); // Плагин для размера файла
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const webphtml = require('gulp-webp-html'); //Плагин для добавления webp кода в html

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const html = ()=>{
    return gulp.src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(size({title: 'До сжатия'}))
    .pipe(htmlmin(config.html.htmlmin))
    .pipe(size({title: 'После сжатия HTML'}))
    .pipe(gulp.dest(path.html.dest));
};

module.exports = html;
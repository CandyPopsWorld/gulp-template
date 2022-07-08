const gulp = require('gulp');
//Плагины
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const imagemin = require('gulp-imagemin'); // Плагин для оптимизации избражений
const newer = require('gulp-newer'); //Плагин котрый пропускает в файловый поток тлько те файлы которые еще не были обработаны
const webp = require('gulp-webp'); //Плагин для изображений webp

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const img = ()=>{
    return gulp.src(path.image.src)
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'IMAGE',
            message: error.message
        }))
    }))
    .pipe(newer(path.image.dest))
    .pipe(webp())
    .pipe(gulp.dest(path.image.dest))
    .pipe(gulp.src(path.image.src))
    .pipe(newer(path.image.dest))
    .pipe(imagemin(config.image.imagemin))
    .pipe(gulp.dest(path.image.dest));
};

module.exports = img;
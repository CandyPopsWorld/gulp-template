const gulp = require("gulp");

// Плагины
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const newer = require('gulp-newer'); //Плагин котрый пропускает в файловый поток тлько те файлы которые еще не были обработаны
const fonter = require('gulp-fonter'); //Плагин для обработки шрифтов

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const fonts = ()=>{
    return gulp.src(path.fonts.src)
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'FONTS',
            message: error.message
        }))
    }))
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(config.fonts.fonter))
    .pipe(gulp.dest(path.fonts.dest));
};

module.exports = fonts;
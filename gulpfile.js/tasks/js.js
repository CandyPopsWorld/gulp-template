const gulp = require("gulp");

// Плагины
const plumber = require('gulp-plumber'); // Плагин для ловли ошибок
const notify = require('gulp-notify'); // Плагин для работы с всплывающими сообщениями
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const js = ()=>{
    return gulp.src(path.js.src, {sourcemaps: true})
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: 'JS',
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(config.js.webpack))
    .pipe(gulp.dest(path.js.dest, {sourcemaps: true}));
};

module.exports = js;
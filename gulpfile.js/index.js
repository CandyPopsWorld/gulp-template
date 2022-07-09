const gulp = require('gulp');

//Задачи
const clear = require('./tasks/clear');
const css = require('./tasks/css');
const fonts = require('./tasks/fonts');
const html = require('./tasks/html');
const img = require('./tasks/image');
const js = require('./tasks/js');
const scss = require('./tasks/scss');
const server = require('./tasks/server');

//Плагины
// const browsersync = require('browser-sync').create();
const variable = require('./config/variable');

//Конфигурация
const path = require('./config/path');

const watcher = ()=>{
    gulp.watch(path.html.watch).on('all',variable.browsersync.reload);
    gulp.watch(path.scss.watch).on('all',variable.browsersync.reload);
    gulp.watch(path.css.watch).on('all',variable.browsersync.reload);
    gulp.watch(path.js.watch).on('all',variable.browsersync.reload);
    gulp.watch(path.image.watch).on('all',variable.browsersync.reload);
    gulp.watch(path.fonts.watch).on('all', variable.browsersync.reload);
};


const build = gulp.series(
    clear,
    gulp.parallel(html,css,scss,js,img,fonts)
);

const dev = gulp.series(
    build,
    gulp.parallel(server, watcher)
);

//Экспорт задач
module.exports.html = html;
module.exports.css = css;
module.exports.scss = scss;
module.exports.watch = watcher;
module.exports.clear = clear;
module.exports.img = img;
module.exports.fonts = fonts;
module.exports.server = server;

//Общие задачи для сборки
module.exports.dev = dev;
module.exports.build = build;
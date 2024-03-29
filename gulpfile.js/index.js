const gulp = require('gulp');

//Задачи
const clear = require('./tasks/clear');
const css = require('./tasks/css');
const fonts = require('./tasks/fonts');
const html = require('./tasks/html');
const img = require('./tasks/image');
const js = require('./tasks/js');
const scss = require('./tasks/scss');

//Плагины
const browsersync = require('browser-sync').create();

//Конфигурация
const path = require('./config/path');
const config = require('./config/config');

const watcher = ()=>{
    gulp.watch(path.html.watch,html).on('all',browsersync.reload);
    gulp.watch(path.scss.watch,scss).on('all',browsersync.reload);
    gulp.watch(path.css.watch,css).on('all',browsersync.reload);
    gulp.watch(path.js.watch,js).on('all',browsersync.reload);
    gulp.watch(path.image.watch,img).on('all',browsersync.reload);
    gulp.watch(path.fonts.watch,fonts).on('all',browsersync.reload);
};

const server = ()=>{
    browsersync.init(config.server.browsersync);
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
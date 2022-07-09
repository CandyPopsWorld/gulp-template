// const browsersync = require('browser-sync').create();
const variable = require('../config/variable');

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const server = ()=>{
    variable.browsersync.init(config.server.browsersync);
};

module.exports = server;
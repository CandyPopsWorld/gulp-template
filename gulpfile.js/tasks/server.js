const browsersync = require('browser-sync');

//Конфигурация
const path = require('../config/path');
const config = require('../config/config');

const server = ()=>{
    browsersync.init(config.server.browsersync);
};

module.exports = server;
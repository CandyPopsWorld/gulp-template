const del = require('del');

//Конфигурация
const path = require('../config/path');

const clear = ()=>{
    return del(path.root);
};

module.exports = clear;
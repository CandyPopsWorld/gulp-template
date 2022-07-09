const path = require('../config/path');

module.exports = {
    fonts:{
        fonter: {
            formats: ['ttf', 'woff', 'eot', 'svg']
        }
    },
    html:{
        htmlmin: {
            collapseWhitespace: true
        }
    },
    image: {
        imagemin: {
            verbose: true
        }
    },
    js: {
        webpack: {
            mode: "production"
        }
    },
    server: {
        browsersync: {
            server: {
                baseDir: path.root
            },
            port: 4000
        }
    } 
};
'use strict'

module.exports = function(db) {
    const baseModel = require('./base-model')(db);

    const models = {
        url: require('./app/scraper/url-model')(baseModel)
    };

    return models;
}
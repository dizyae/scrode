'use strict'

module.exports = function(vendors) {
    const helpers = {
        scraperFunctions: require('./app/scraper/scraper-functions')(vendors),
        jsonFeedFunctions: require('./app/json-feed/json-feed-functions')(vendors)
    }

    return helpers;
}

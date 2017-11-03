'use strict'

module.exports = function() {
    const vendors = {
        requestPromise: require('request-promise'),
        ObjectId: require('mongodb').ObjectId,
        cheerio: require('cheerio'),
        fs: require('fs'),
        request: require('request')
    };

    return vendors;
}

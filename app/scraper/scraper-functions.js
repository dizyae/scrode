'use strict'

module.exports = function(vendors) {
    const cheerio = vendors.cheerio;
    const request = vendors.requestPromise;

    const helper = {
        getHTML: getHTML,
        searchHTML: searchHTML
    };

    function getHTML(url) {
        let options = {
            uri: url
        };

        return request(options)
            .then(body => { return body })
            .catch(err => { return err });
    }

    function searchHTML(html, params) {
        const $ = cheerio.load(html);
        let selectors = [];
        let searchResults = {}
        params.forEach(param => {
            selectors.push(getSelector(param))
        });
        selectors.forEach(selector => {
            searchResults[selector] = [];
            $(selector).each((index, element) => {
                searchResults[selector].push($(element).html());
            });
        });
        return searchResults;
    }

    // Private
    function getSelector(searchParam) {
        if (searchParam.type === 'tag') {
            return searchParam.value;
        }
        if (searchParam.type === 'class') {
            return `.${searchParam.value}`;
        }
        if (searchParam.type === 'id') {
            return `#${searchParam.value}`;
        }
    }

    return helper;
}

##INSTALL

- Run `npm install `
- Create env.js in project root add the following and save:
```javascript
module.exports = {
    environment: 'development',
    port: 3000,
    mongodbUser: <USER>,
    mongodbPass: <PASSWORD>
}
```
- Repleace `<USER>` and `<PASSWORD>` with the credentials provided to you.
- Run `nodemon server.js`. You should see some output telling you the app is ready to accept connections.

##JSON REST API REFERENCE

POST /scrape returns scraped content from a page.

JSON request body must contain url property.  SearchBy property is an optional array and supports type "tag", "class", and "id".  If searchBy is ommitted, the full html document will be returned.
Example:
```javascript
{
    "url": "https://google.com",
    "searchBy": [
        {
            "type": "tag",
            "value": "img"
        },
        {
            ...
        }
    ]
}
```

POST /json-feed returns a json feed.

JSON request body must contain url property. Example
```javascript
{
    "url": "https://google.com",
}
```


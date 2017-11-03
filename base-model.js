'use strict'

module.exports = function(db) {
    const baseModel = {
        db: db,
        create: create
    };

    function create(data) {
        if (this.isValid(data)) {
            data = Object.assign({}, data, {
                created: new Date(),
                updated: new Date()
            });
            
            return this.collection.insertOne(data)
                .then(doc => { return doc.ops[0] })
                .catch(err => { return err });
        }
    }

    return baseModel;
}
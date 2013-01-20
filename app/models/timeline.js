exports.definition = {
    config: {
        "URL": "http://search.twitter.com/search.json?q=%23TitaniumJP",
        "adapter": {
            "type": "restapi",
            "collection_name": "timeline"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};
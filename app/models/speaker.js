exports.definition = {
    config: {
        "adapter": {
            "type": "customobjects",
            "collection_name": "speaker"
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
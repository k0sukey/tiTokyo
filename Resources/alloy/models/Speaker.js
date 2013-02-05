exports.definition = {
    config: {
        adapter: {
            type: "customobjects",
            collection_name: "speaker"
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("speaker", exports.definition, []);

collection = Alloy.C("speaker", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
exports.definition = {
    config: {
        adapter: {
            type: "customobjects",
            collection_name: "agenda"
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

model = Alloy.M("agenda", exports.definition, []);

collection = Alloy.C("agenda", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
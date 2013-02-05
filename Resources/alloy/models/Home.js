exports.definition = {
    config: {
        adapter: {
            type: "customobjects",
            collection_name: "home"
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

model = Alloy.M("home", exports.definition, []);

collection = Alloy.C("home", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
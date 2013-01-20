exports.definition = {
    config: {
        URL: "http://search.twitter.com/search.json?q=%23TitaniumJP",
        adapter: {
            type: "restapi",
            collection_name: "timeline"
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

model = Alloy.M("timeline", exports.definition, []);

collection = Alloy.C("timeline", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
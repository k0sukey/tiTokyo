function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "be.k0suke.fontawesome/" + s : s.substring(0, index) + "/be.k0suke.fontawesome/" + s.substring(index + 1);
    return path.indexOf("/") !== 0 ? "/" + path : path;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Widget = A$(Ti.UI.createLabel({
        id: "Widget"
    }), "Label", null);
    $.addTopLevelView($.__views.Widget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, fontawesome = require(WPATH("IconicFont")).IconicFont({
        font: WPATH("FontAwesome")
    });
    args.text = fontawesome.icon(args.icon);
    args.font || (args.font = {});
    args.font.fontFamily = fontawesome.fontfamily();
    $.Widget.applyProperties(args);
    exports.setProperties = function(options) {
        options.icon && (options.text = fontawesome.icon(options.icon));
        $.Widget.applyProperties(options);
    };
    exports.getProperties = function(option) {
        return $.Widget[option];
    };
    [ "add", "addEventListener", "animate", "applyProperties", "convertPointToView", "fireEvent", "hide", "remove", "removeEventListener", "show", "toImage" ].forEach(function(func) {
        exports[func] = $.Widget[func];
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
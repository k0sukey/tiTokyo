function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        top: 0,
        height: "89dp",
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.background = A$(Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: "65dp",
        backgroundColor: "#624e35",
        id: "background"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.background);
    $.__views.line = A$(Ti.UI.createView({
        top: "65dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#fbfdff",
        id: "line"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.line);
    $.__views.logo = A$(Ti.UI.createButton({
        width: "86dp",
        height: "89dp",
        backgroundImage: "/images/logo.png",
        backgroundSelectedImage: "/images/logo.png",
        id: "logo"
    }), "Button", $.__views.container);
    $.__views.container.add($.__views.logo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var visibled = !0;
    $.logo.on("click", function() {
        visibled = visibled ? !1 : !0;
        $.trigger("navigation:logo", {
            visibled: visibled
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
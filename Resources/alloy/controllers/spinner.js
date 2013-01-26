function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.Platform.displayCaps.platformHeight,
        touchEnabled: !1,
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.spinner = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "40dp"
        },
        touchEnabled: !1,
        id: "spinner",
        icon: "icon-spinner"
    });
    $.__views.spinner.setParent($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), interval;
    $.on("spinner:show", function() {
        Animation.fadeIn($.container, 200, function() {
            $.container.applyProperties({
                touchEnabled: !0
            });
        });
    });
    $.on("spinner:dismiss", function() {
        Animation.fadeOut($.container, 200, function() {
            $.container.applyProperties({
                touchEnabled: !1
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
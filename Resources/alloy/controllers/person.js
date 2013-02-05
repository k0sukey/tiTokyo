function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        top: "10dp",
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.name = A$(Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        id: "name"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.name);
    $.__views.title = A$(Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "12dp"
        },
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.frame = A$(Ti.UI.createView({
        top: "4dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "frame"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.frame);
    $.__views.photo = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        id: "photo"
    }), "ImageView", $.__views.frame);
    $.__views.frame.add($.__views.photo);
    $.__views.content = A$(Ti.UI.createLabel({
        top: 0,
        left: "58dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "14dp"
        },
        id: "content"
    }), "Label", $.__views.frame);
    $.__views.frame.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.applyProperties({
        text: args.name[Alloy.CFG.i18n]
    });
    $.title.applyProperties({
        text: args.title[Alloy.CFG.i18n]
    });
    $.photo.applyProperties({
        image: args.photo.urls.original
    });
    $.content.applyProperties({
        text: args.content[Alloy.CFG.i18n]
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
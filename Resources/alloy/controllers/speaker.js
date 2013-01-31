function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentWidth: Ti.Platform.displayCaps.platformWidth,
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        opacity: 0,
        id: "container"
    }), "ScrollView", null);
    $.addTopLevelView($.__views.container);
    $.__views.title = A$(Ti.UI.createLabel({
        top: "20dp",
        bottom: "20dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "- SPEAKERS -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.__alloyId31 = A$(Ti.UI.createLabel({
        top: "10dp",
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_name0",
        id: "__alloyId31"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId31);
    $.__views.__alloyId32 = A$(Ti.UI.createLabel({
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_title0",
        id: "__alloyId32"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId32);
    $.__views.__alloyId33 = A$(Ti.UI.createView({
        top: "4dp",
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId33"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.__alloyId33);
    $.__views.__alloyId34 = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        image: "/images/jeff.png",
        id: "__alloyId34"
    }), "ImageView", $.__views.__alloyId33);
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = A$(Ti.UI.createLabel({
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
        textid: "speaker_description0",
        id: "__alloyId35"
    }), "Label", $.__views.__alloyId33);
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = A$(Ti.UI.createLabel({
        top: "10dp",
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_name1",
        id: "__alloyId36"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId36);
    $.__views.__alloyId37 = A$(Ti.UI.createLabel({
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_title1",
        id: "__alloyId37"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId37);
    $.__views.__alloyId38 = A$(Ti.UI.createView({
        top: "4dp",
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId38"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.__alloyId38);
    $.__views.__alloyId39 = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        image: "/images/takechi.png",
        id: "__alloyId39"
    }), "ImageView", $.__views.__alloyId38);
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = A$(Ti.UI.createLabel({
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
        textid: "speaker_description1",
        id: "__alloyId40"
    }), "Label", $.__views.__alloyId38);
    $.__views.__alloyId38.add($.__views.__alloyId40);
    $.__views.__alloyId41 = A$(Ti.UI.createLabel({
        top: "10dp",
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_name2",
        id: "__alloyId41"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId41);
    $.__views.__alloyId42 = A$(Ti.UI.createLabel({
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_title2",
        id: "__alloyId42"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId42);
    $.__views.__alloyId43 = A$(Ti.UI.createView({
        top: "4dp",
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId43"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.__alloyId43);
    $.__views.__alloyId44 = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        image: "/images/kota.png",
        id: "__alloyId44"
    }), "ImageView", $.__views.__alloyId43);
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = A$(Ti.UI.createLabel({
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
        textid: "speaker_description2",
        id: "__alloyId45"
    }), "Label", $.__views.__alloyId43);
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = A$(Ti.UI.createLabel({
        top: "10dp",
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_name3",
        id: "__alloyId46"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId46);
    $.__views.__alloyId47 = A$(Ti.UI.createLabel({
        right: "10dp",
        left: "10dp",
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
        textid: "speaker_title3",
        id: "__alloyId47"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId47);
    $.__views.__alloyId48 = A$(Ti.UI.createView({
        top: "4dp",
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId48"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.__alloyId48);
    $.__views.__alloyId49 = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        image: "/images/alco.png",
        id: "__alloyId49"
    }), "ImageView", $.__views.__alloyId48);
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = A$(Ti.UI.createLabel({
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
        textid: "speaker_description3",
        id: "__alloyId50"
    }), "Label", $.__views.__alloyId48);
    $.__views.__alloyId48.add($.__views.__alloyId50);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.on("speaker:focus", function() {
        $.container.applyProperties({
            scrollingEnabled: !0
        });
    });
    $.on("speaker:blur", function() {
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
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
        textAlign: "center",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "- AGENDA -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.__alloyId0 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "9:00 - 9:30",
        id: "__alloyId0"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId0);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description0",
        id: "__alloyId1"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId1);
    $.__views.__alloyId2 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "9:30 - 10:30",
        id: "__alloyId2"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId2);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description1",
        id: "__alloyId3"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId3);
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "10:30 - 11:30",
        id: "__alloyId4"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description2",
        id: "__alloyId5"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId5);
    $.__views.__alloyId6 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "11:30 - 12:30",
        id: "__alloyId6"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description3",
        id: "__alloyId7"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId7);
    $.__views.__alloyId8 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "12:30 - 13:30",
        id: "__alloyId8"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId8);
    $.__views.__alloyId9 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description4",
        id: "__alloyId9"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId9);
    $.__views.__alloyId10 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "13:30 - 14:30",
        id: "__alloyId10"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId10);
    $.__views.__alloyId11 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description5",
        id: "__alloyId11"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId11);
    $.__views.__alloyId12 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "14:30 - 15:30",
        id: "__alloyId12"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId12);
    $.__views.__alloyId13 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description6",
        id: "__alloyId13"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId13);
    $.__views.__alloyId14 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "15:30 - 16:00",
        id: "__alloyId14"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId14);
    $.__views.__alloyId15 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description7",
        id: "__alloyId15"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId15);
    $.__views.__alloyId16 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "16:00 - 17:00",
        id: "__alloyId16"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId16);
    $.__views.__alloyId17 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description8",
        id: "__alloyId17"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId17);
    $.__views.__alloyId18 = A$(Ti.UI.createLabel({
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
            fontSize: "12dp",
            fontWeight: "bold"
        },
        text: "17:00 - 18:30",
        id: "__alloyId18"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId18);
    $.__views.__alloyId19 = A$(Ti.UI.createLabel({
        top: "4dp",
        bottom: "10dp",
        right: "10dp",
        left: "40dp",
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
        textid: "agenda_description9",
        id: "__alloyId19"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId19);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.on("agenda:focus", function() {
        $.container.applyProperties({
            scrollingEnabled: !0
        });
    });
    $.on("agenda:blur", function() {
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
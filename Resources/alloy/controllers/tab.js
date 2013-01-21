function Controller() {
    function doTab(tab) {
        _.each([ "home", "agenda", "speaker", "timeline", "venue" ], function(item) {
            $["tab" + item].applyProperties({
                touchEnabled: !1
            });
            if (tab === item) {
                $["icon" + item].setProperties({
                    color: "#00bfff"
                });
                $["title" + item].applyProperties({
                    color: "#00bfff"
                });
            } else {
                $["icon" + item].setProperties({
                    color: "#fff"
                });
                $["title" + item].applyProperties({
                    color: "#fff"
                });
            }
        });
        $.trigger("tab:change", {
            before: current,
            after: tab
        });
        current = tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        backgroundColor: "#000",
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.line = A$(Ti.UI.createView({
        top: "1dp",
        height: "1dp",
        backgroundColor: "#333",
        touchEnabled: !1,
        id: "line"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.line);
    $.__views.tabhome = A$(Ti.UI.createView({
        width: "20%",
        left: 0,
        id: "tabhome"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.tabhome);
    $.__views.iconhome = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: "6dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#00bfff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "iconhome",
        icon: "icon-home"
    });
    $.__views.iconhome.setParent($.__views.tabhome);
    $.__views.titlehome = A$(Ti.UI.createLabel({
        bottom: "2dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#00bfff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "10dp"
        },
        touchEnabled: !1,
        text: "HOME",
        id: "titlehome"
    }), "Label", $.__views.tabhome);
    $.__views.tabhome.add($.__views.titlehome);
    $.__views.tabagenda = A$(Ti.UI.createView({
        width: "20%",
        left: Alloy.CFG.tab.agendaLeft,
        id: "tabagenda"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.tabagenda);
    $.__views.iconagenda = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: "6dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "iconagenda",
        icon: "icon-time"
    });
    $.__views.iconagenda.setParent($.__views.tabagenda);
    $.__views.titleagenda = A$(Ti.UI.createLabel({
        bottom: "2dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "10dp"
        },
        touchEnabled: !1,
        text: "AGENDA",
        id: "titleagenda"
    }), "Label", $.__views.tabagenda);
    $.__views.tabagenda.add($.__views.titleagenda);
    $.__views.tabspeaker = A$(Ti.UI.createView({
        width: "20%",
        left: Alloy.CFG.tab.speakerLeft,
        id: "tabspeaker"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.tabspeaker);
    $.__views.iconspeaker = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: "6dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "iconspeaker",
        icon: "icon-bullhorn"
    });
    $.__views.iconspeaker.setParent($.__views.tabspeaker);
    $.__views.titlespeaker = A$(Ti.UI.createLabel({
        bottom: "2dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "10dp"
        },
        touchEnabled: !1,
        text: "SPEAKERS",
        id: "titlespeaker"
    }), "Label", $.__views.tabspeaker);
    $.__views.tabspeaker.add($.__views.titlespeaker);
    $.__views.tabtimeline = A$(Ti.UI.createView({
        width: "20%",
        left: Alloy.CFG.tab.timelineLeft,
        id: "tabtimeline"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.tabtimeline);
    $.__views.icontimeline = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: "6dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "icontimeline",
        icon: "icon-comments-alt"
    });
    $.__views.icontimeline.setParent($.__views.tabtimeline);
    $.__views.titletimeline = A$(Ti.UI.createLabel({
        bottom: "2dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "10dp"
        },
        touchEnabled: !1,
        text: "TIMELINE",
        id: "titletimeline"
    }), "Label", $.__views.tabtimeline);
    $.__views.tabtimeline.add($.__views.titletimeline);
    $.__views.tabvenue = A$(Ti.UI.createView({
        width: "20%",
        left: Alloy.CFG.tab.venueLeft,
        id: "tabvenue"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.tabvenue);
    $.__views.iconvenue = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        top: "6dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "iconvenue",
        icon: "icon-map-marker"
    });
    $.__views.iconvenue.setParent($.__views.tabvenue);
    $.__views.titlevenue = A$(Ti.UI.createLabel({
        bottom: "2dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        shadowColor: "#333",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "10dp"
        },
        touchEnabled: !1,
        text: "VENUE",
        id: "titlevenue"
    }), "Label", $.__views.tabvenue);
    $.__views.tabvenue.add($.__views.titlevenue);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var current = "home";
    $.on("tab:changed", function() {
        _.each([ "home", "agenda", "speaker", "timeline", "venue" ], function(item) {
            $["tab" + item].applyProperties({
                touchEnabled: !0
            });
        });
    });
    $.tabhome.on("click", function() {
        doTab("home");
    });
    $.tabagenda.on("click", function() {
        doTab("agenda");
    });
    $.tabspeaker.on("click", function() {
        doTab("speaker");
    });
    $.tabtimeline.on("click", function() {
        doTab("timeline");
    });
    $.tabvenue.on("click", function() {
        doTab("venue");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
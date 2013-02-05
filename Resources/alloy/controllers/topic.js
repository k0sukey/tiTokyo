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
    $.__views.schedule = A$(Ti.UI.createLabel({
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
        id: "schedule"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.schedule);
    $.__views.content = A$(Ti.UI.createLabel({
        top: "4dp",
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
        id: "content"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Moment = require("alloy/moment"), args = arguments[0] || {};
    $.schedule.applyProperties({
        text: Moment(args.started_at).utc().local().format("HH:mm") + " - " + Moment(args.ended_at).utc().local().format("HH:mm")
    });
    $.content.applyProperties({
        text: args.content[Alloy.CFG.i18n]
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
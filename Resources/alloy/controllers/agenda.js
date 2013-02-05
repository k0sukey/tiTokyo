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
        text: "- AGENDA -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), Dialogs = require("alloy/dialogs");
    $.on("agenda:focus", function() {
        $.container.applyProperties({
            scrollingEnabled: !0
        });
        if (!Ti.Network.online) {
            Dialogs.confirm({
                title: L("agenda_error_title"),
                message: L("agenda_error_network"),
                yes: L("agenda_error_yes"),
                no: L("agenda_error_no"),
                callback: function() {
                    $.trigger("agenda:focus");
                }
            });
            return;
        }
        Alloy.Globals.progress.trigger("progress:show", function() {
            var agenda = Alloy.createCollection("agenda");
            agenda.fetch({
                read: "query",
                data: {
                    limit: 1000,
                    skip: 0,
                    order: "-started_at"
                },
                success: function(collection, data) {
                    data.reverse();
                    _.each(data, function(item) {
                        var topic = Alloy.createController("topic", item);
                        $.container.add(topic.getView());
                        Animation.fadeIn(topic.getView(), 200);
                    });
                    Alloy.Globals.progress.trigger("progress:dismiss");
                },
                error: function(collection, data) {
                    Alloy.Globals.progress.trigger("progress:dismiss");
                    Dialogs.confirm({
                        title: L("agenda_error_title"),
                        message: L("agenda_error_xhr"),
                        yes: L("agenda_error_yes"),
                        no: L("agenda_error_no"),
                        callback: function() {
                            $.trigger("agenda:focus");
                        }
                    });
                }
            });
        });
    });
    $.on("agenda:blur", function() {
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    $.on("agenda:layout", function() {
        $.container.applyProperties({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
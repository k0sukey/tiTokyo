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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), Dialogs = require("alloy/dialogs");
    $.on("speaker:focus", function() {
        $.container.applyProperties({
            scrollingEnabled: !0
        });
        if (!Ti.Network.online) {
            Dialogs.confirm({
                title: L("speaker_error_title"),
                message: L("speaker_error_network"),
                yes: L("speaker_error_yes"),
                no: L("speaker_error_no"),
                callback: function() {
                    $.trigger("speaker:focus");
                }
            });
            return;
        }
        Alloy.Globals.progress.trigger("progress:show", function() {
            var speaker = Alloy.createCollection("speaker");
            speaker.fetch({
                read: "query",
                data: {
                    limit: 1000,
                    skip: 0,
                    order: "-order"
                },
                success: function(collection, data) {
                    data.reverse();
                    _.each(data, function(item) {
                        var person = Alloy.createController("person", item);
                        $.container.add(person.getView());
                        Animation.fadeIn(person.getView(), 200);
                    });
                    Alloy.Globals.progress.trigger("progress:dismiss");
                },
                error: function(collection, data) {
                    Alloy.Globals.progress.trigger("progress:dismiss");
                    Dialogs.confirm({
                        title: L("speaker_error_title"),
                        message: L("speaker_error_xhr"),
                        yes: L("speaker_error_yes"),
                        no: L("speaker_error_no"),
                        callback: function() {
                            $.trigger("speaker:focus");
                        }
                    });
                }
            });
        });
    });
    $.on("speaker:blur", function() {
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    $.on("speaker:layout", function() {
        $.container.applyProperties({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
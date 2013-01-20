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
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.icon = A$(Ti.UI.createImageView({
        top: 0,
        left: 0,
        width: "48dp",
        height: "48dp",
        borderRadius: 4,
        hires: !0,
        id: "icon"
    }), "ImageView", $.__views.container);
    $.__views.container.add($.__views.icon);
    $.__views.username = A$(Ti.UI.createLabel({
        top: 0,
        left: "58dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "username"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.username);
    $.__views.timestamp = A$(Ti.UI.createLabel({
        top: 0,
        right: 0,
        width: Ti.UI.SIZE,
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
        id: "timestamp"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.timestamp);
    $.__views.tweet = A$(Ti.UI.createLabel({
        top: "24dp",
        left: "58dp",
        width: Ti.UI.SIZE,
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
        id: "tweet"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.tweet);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Moment = require("alloy/moment"), args = arguments[0] || {};
    $.icon.applyProperties({
        image: args.profile_image_url
    });
    $.username.applyProperties({
        text: "@" + args.from_user
    });
    $.timestamp.applyProperties({
        text: Moment(args.created_at).utc().local().fromNow()
    });
    $.tweet.applyProperties({
        text: args.text
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
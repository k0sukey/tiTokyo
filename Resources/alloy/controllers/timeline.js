function Controller() {
    function doPost() {
        var post = Alloy.createController("post");
        $.base.add(post.getView());
        $.shadow.animate({
            opacity: 0.4,
            duartion: 200
        }, function() {
            $.shadow.applyProperties({
                touchEnabled: !0
            });
            Animation.popIn(post.getView(), function() {
                post.trigger("post:show");
            });
        });
        post.on("post:share", function(e) {
            Animation.fadeOut(post.getView(), 200, function() {
                $.base.remove(post.getView());
                post = null;
                var activityIndicator = Ti.UI.createActivityIndicator({
                    style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
                });
                $.base.add(activityIndicator);
                activityIndicator.show();
                twitter.share({
                    message: e.message,
                    success: function(e) {
                        activityIndicator.hide();
                        $.base.remove(activityIndicator);
                        Animation.fadeOut($.shadow, 200, function() {
                            $.shadow.applyProperties({
                                touchEnabled: !1
                            });
                        });
                    },
                    error: function(e) {
                        activityIndicator.hide();
                        $.base.remove(activityIndicator);
                        Animation.fadeOut($.shadow, 200, function() {
                            $.shadow.applyProperties({
                                touchEnabled: !1
                            });
                            Dialogs.confirm({
                                title: L("timeline_error_title"),
                                message: L("timeline_error_post"),
                                yes: L("timeline_error_yes"),
                                no: L("timeline_error_no")
                            });
                        });
                    }
                });
            });
        });
        post.on("post:dismiss", function() {
            Animation.fadeOut(post.getView(), 200, function() {
                $.base.remove(post.getView());
                post = null;
            });
            Animation.fadeOut($.shadow, 200);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.base = A$(Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        opacity: 0,
        id: "base"
    }), "View", null);
    $.addTopLevelView($.__views.base);
    $.__views.container = A$(Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentWidth: Ti.Platform.displayCaps.platformWidth,
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        id: "container"
    }), "ScrollView", $.__views.base);
    $.__views.base.add($.__views.container);
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
        text: "- TIMELINE -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.buttonpost = A$(Ti.UI.createView({
        top: 0,
        right: "20dp",
        width: "44dp",
        height: "66dp",
        backgroundImage: "/images/ribbon.png",
        id: "buttonpost"
    }), "View", $.__views.base);
    $.__views.base.add($.__views.buttonpost);
    $.__views.iconpost = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#00bfff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: "center",
        font: {
            fontSize: "20dp"
        },
        touchEnabled: !1,
        id: "iconpost",
        icon: "icon-twitter"
    });
    $.__views.iconpost.setParent($.__views.buttonpost);
    $.__views.shadow = A$(Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#000",
        opacity: 0,
        touchEnabled: !1,
        id: "shadow"
    }), "View", $.__views.base);
    $.__views.base.add($.__views.shadow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), Dialogs = require("alloy/dialogs"), Social = require("alloy/social"), twitter = Social.create({
        consumerKey: Ti.App.Properties.getString("twitter-consumerKey"),
        consumerSecret: Ti.App.Properties.getString("twitter-consumerSecret")
    });
    $.buttonpost.on("click", function() {
        twitter.isAuthorized() ? doPost() : twitter.authorize(doPost);
    });
    $.on("timeline:focus", function() {
        if (!Ti.Network.online) Dialogs.confirm({
            title: L("timeline_error_title"),
            message: L("timeline_error_network"),
            yes: L("timeline_error_yes"),
            no: L("timeline_error_no"),
            callback: function() {
                $.trigger("timeline:focus");
            }
        }); else {
            $.shadow.animate({
                opacity: 0.4,
                duartion: 200
            }, function() {
                $.shadow.applyProperties({
                    touchEnabled: !0
                });
            });
            var activityIndicator = Ti.UI.createActivityIndicator({
                style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
            });
            $.base.add(activityIndicator);
            activityIndicator.show();
            var timeline = Alloy.createCollection("timeline");
            timeline.fetch({
                success: function(collection, data) {
                    Animation.fadeOut($.shadow, 200, function() {
                        activityIndicator.hide();
                        $.base.remove(activityIndicator);
                        $.shadow.applyProperties({
                            touchEnabled: !1
                        });
                    });
                    _.each(data, function(_item) {
                        _.isArray(_item) && _.each(_item, function(item) {
                            var tweet = Alloy.createController("tweet", item);
                            $.container.add(tweet.getView());
                            Animation.fadeIn(tweet.getView(), 200);
                        });
                    });
                },
                error: function(collection, data) {
                    Animation.fadeOut($.shadow, 200, function() {
                        activityIndicator.hide();
                        $.base.remove(activityIndicator);
                        $.shadow.applyProperties({
                            touchEnabled: !1
                        });
                    });
                    Dialogs.confirm({
                        title: L("timeline_error_title"),
                        message: L("timeline_error_xhr"),
                        yes: L("timeline_error_yes"),
                        no: L("timeline_error_no"),
                        callback: function() {
                            $.trigger("timeline:focus");
                        }
                    });
                }
            });
        }
        $.container.applyProperties({
            scrollingEnabled: !0
        });
    });
    $.on("timeline:blur", function() {
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
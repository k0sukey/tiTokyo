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
    $.__views.slideshow = A$(Ti.UI.createView({
        top: 0,
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        id: "slideshow"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.slideshow);
    $.__views.slide0 = A$(Ti.UI.createImageView({
        image: "/images/slide0.jpg",
        opacity: 1,
        id: "slide0"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide0);
    $.__views.slide1 = A$(Ti.UI.createImageView({
        image: "/images/slide1.jpg",
        id: "slide1"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide1);
    $.__views.slide2 = A$(Ti.UI.createImageView({
        image: "/images/slide2.jpg",
        id: "slide2"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide2);
    $.__views.slide3 = A$(Ti.UI.createImageView({
        image: "/images/slide3.jpg",
        id: "slide3"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide3);
    $.__views.slide4 = A$(Ti.UI.createImageView({
        image: "/images/slide4.jpg",
        id: "slide4"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide4);
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
        text: "- TOKYO, FEB 16th, 2013 -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), Dialogs = require("alloy/dialogs"), slideshow = [ $.slide0, $.slide1, $.slide2, $.slide3, $.slide4 ], interval;
    $.on("home:focus", function() {
        $.container.applyProperties({
            scrollingEnabled: !0
        });
        var current = 0;
        _.each(slideshow, function(item, index) {
            item.applyProperties({
                opacity: index === 0 ? 1 : 0
            });
        });
        interval = setInterval(function() {
            var next = current + 1;
            next >= slideshow.length && (next = 0);
            Animation.crossFade(slideshow[current], slideshow[next], 1000, function() {
                current = next;
            });
        }, 4000);
        if (!Ti.Network.online) {
            Dialogs.confirm({
                title: L("home_error_title"),
                message: L("home_error_network"),
                yes: L("home_error_yes"),
                no: L("home_error_no"),
                callback: function() {
                    clearInterval(interval);
                    $.trigger("home:focus");
                }
            });
            return;
        }
        Alloy.Globals.progress.trigger("progress:show", function() {
            var home = Alloy.createCollection("home");
            home.fetch({
                read: "query",
                data: {
                    limit: 1000,
                    skip: 0,
                    order: "-order"
                },
                success: function(collection, data) {
                    data.reverse();
                    _.each(data, function(item) {
                        var description = Alloy.createController("description", item);
                        $.container.add(description.getView());
                        Animation.fadeIn(description.getView(), 200);
                    });
                    Alloy.Globals.progress.trigger("progress:dismiss");
                },
                error: function(collection, data) {
                    Alloy.Globals.progress.trigger("progress:dismiss");
                    Dialogs.confirm({
                        title: L("home_error_title"),
                        message: L("home_error_xhr"),
                        yes: L("home_error_yes"),
                        no: L("home_error_no"),
                        callback: function() {
                            clearInterval(interval);
                            $.trigger("home:focus");
                        }
                    });
                }
            });
        });
    });
    $.on("home:blur", function() {
        clearInterval(interval);
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    $.on("home:layout", function() {
        $.container.applyProperties({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
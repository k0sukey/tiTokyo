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
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        id: "slide0"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide0);
    $.__views.slide1 = A$(Ti.UI.createImageView({
        image: "/images/slide1.jpg",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        opacity: 0,
        id: "slide1"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide1);
    $.__views.slide2 = A$(Ti.UI.createImageView({
        image: "/images/slide2.jpg",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        opacity: 0,
        id: "slide2"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide2);
    $.__views.slide3 = A$(Ti.UI.createImageView({
        image: "/images/slide3.jpg",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        opacity: 0,
        id: "slide3"
    }), "ImageView", $.__views.slideshow);
    $.__views.slideshow.add($.__views.slide3);
    $.__views.slide4 = A$(Ti.UI.createImageView({
        image: "/images/slide4.jpg",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Alloy.CFG.home.slideHeight,
        opacity: 0,
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
    $.__views.__alloyId20 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
            fontSize: "14dp"
        },
        textid: "home_description0",
        id: "__alloyId20"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId20);
    $.__views.__alloyId21 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
            fontSize: "14dp"
        },
        textid: "home_description1",
        id: "__alloyId21"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId21);
    $.__views.__alloyId22 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
            fontSize: "14dp"
        },
        textid: "home_description2",
        id: "__alloyId22"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId22);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Animation = require("alloy/animation"), slideshow = [ $.slide0, $.slide1, $.slide2, $.slide3, $.slide4 ], interval;
    $.on("home:focus", function() {
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
        $.container.applyProperties({
            scrollingEnabled: !0
        });
    });
    $.on("home:blur", function() {
        clearInterval(interval);
        $.container.applyProperties({
            scrollingEnabled: !1
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
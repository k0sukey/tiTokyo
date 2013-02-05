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
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "- INFORMATION -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.builtby = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "20dp",
        left: "10dp",
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "tiTokyo app built by @k0sukey",
        id: "builtby"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.builtby);
    $.__views.specialthanks = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "20dp",
        left: "10dp",
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "Japan Titanium Mobile User Group",
        id: "specialthanks"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.specialthanks);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "Host",
        id: "__alloyId1"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId1);
    $.__views.appcelerator = A$(Ti.UI.createImageView({
        bottom: "10dp",
        id: "appcelerator",
        image: "/images/appcelerator.png"
    }), "ImageView", $.__views.container);
    $.__views.container.add($.__views.appcelerator);
    $.__views.__alloyId2 = A$(Ti.UI.createLabel({
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "Sponsor",
        id: "__alloyId2"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId2);
    $.__views.denso = A$(Ti.UI.createImageView({
        bottom: "10dp",
        id: "denso",
        image: "/images/denso.png"
    }), "ImageView", $.__views.container);
    $.__views.container.add($.__views.denso);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "Coordinator",
        id: "__alloyId3"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId3);
    $.__views.usergroup = A$(Ti.UI.createImageView({
        bottom: "10dp",
        id: "usergroup",
        image: "/images/usergroup.png"
    }), "ImageView", $.__views.container);
    $.__views.container.add($.__views.usergroup);
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
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
            fontSize: "14dp",
            fontWeight: "bold"
        },
        text: "Credits",
        id: "__alloyId4"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
        text: "Font Awesome 3.0 by Dave Gandy\nhttp://fortawesome.github.com/Font-Awesome\n\nThe Font Awesome font is licensed under the SIL Open Font License - http://scripts.sil.org/OFL.",
        id: "__alloyId5"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId5);
    $.__views.__alloyId6 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
        text: "napp.alloy.adapter.restapi by Mads Møller\nhttps://github.com/viezel/napp.alloy.adapter.restapi\n\nCopyright (c) 2010-2011 Mads Møller\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        id: "__alloyId6"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
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
        text: "TiDisplay by Kosuke Isobe\nhttps://github.com/k0sukey/TiDisplay\n\nThe MIT License (MIT) Copyright (c) 2013 Kosuke Isobe\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        id: "__alloyId7"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.builtby.on("click", function() {
        Ti.Platform.openURL("https://twitter.com/k0sukey");
    });
    $.specialthanks.on("click", function() {
        Ti.Platform.openURL("http://titanium-mobile.jp");
    });
    $.appcelerator.on("click", function() {
        Ti.Platform.openURL("http://www.appcelerator.com");
    });
    $.denso.on("click", function() {
        Ti.Platform.openURL("http://www.denso.co.jp");
    });
    $.usergroup.on("click", function() {
        Ti.Platform.openURL("http://titanium-mobile.jp");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
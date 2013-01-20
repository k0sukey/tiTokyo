function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        top: -10,
        left: "10dp",
        right: "10dp",
        height: "160dp",
        backgroundImage: "/images/modal.png",
        backgroundRepeat: !0,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.textarea = A$(Ti.UI.createTextArea({
        top: "26dp",
        left: "10dp",
        right: "10dp",
        height: "80dp",
        borderRadius: 4,
        color: "#383838",
        font: {
            fontSize: "14dp"
        },
        id: "textarea",
        value: "#TitaniumJP"
    }), "TextArea", $.__views.container);
    $.__views.container.add($.__views.textarea);
    $.__views.buttonpost = A$(Ti.UI.createButton({
        right: "10dp",
        bottom: "10dp",
        width: "100dp",
        height: "34dp",
        backgroundImage: "/images/button.png",
        backgroundRepeat: !0,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: "center",
        font: {
            fontSize: "14dp"
        },
        id: "buttonpost",
        titleid: "post_post"
    }), "Button", $.__views.container);
    $.__views.container.add($.__views.buttonpost);
    $.__views.buttoncancel = A$(Ti.UI.createButton({
        left: "10dp",
        bottom: "10dp",
        width: "100dp",
        height: "34dp",
        backgroundImage: "/images/button.png",
        backgroundRepeat: !0,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        color: "#fff",
        shadowColor: "#383838",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: "center",
        font: {
            fontSize: "14dp"
        },
        id: "buttoncancel",
        titleid: "post_cancel"
    }), "Button", $.__views.container);
    $.__views.container.add($.__views.buttoncancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.on("post:show", function() {
        $.textarea.focus();
    });
    $.buttonpost.on("click", function() {
        $.textarea.blur();
        $.trigger("post:share", {
            message: $.textarea.getValue()
        });
    });
    $.buttoncancel.on("click", function() {
        $.textarea.blur();
        $.trigger("post:dismiss");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
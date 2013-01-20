function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    var __alloyId45 = [];
    $.__views.annotation = A$(Ti.Map.createAnnotation({
        id: "annotation",
        titleid: "venue_title",
        subtitleid: "venue_subtitle",
        latitude: "35.662331",
        longitude: "139.728733"
    }), "Annotation", null);
    __alloyId45.push($.__views.annotation);
    $.__views.map = A$(Ti.Map.createView({
        region: {
            latitude: 35.662331,
            latitudeDelta: 0.001,
            longitude: 139.728733,
            longitudeDelta: 0.001
        },
        annotations: __alloyId45,
        ns: "Ti.Map",
        id: "map"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.map.selectAnnotation($.annotation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;
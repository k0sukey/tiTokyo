var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.CFG.tab = {
    agendaLeft: Ti.Platform.displayCaps.platformWidth / 5,
    speakerLeft: Ti.Platform.displayCaps.platformWidth / 5 * 2,
    timelineLeft: Ti.Platform.displayCaps.platformWidth / 5 * 3,
    venueLeft: Ti.Platform.displayCaps.platformWidth / 5 * 4
};

Alloy.CFG.home = {
    slideHeight: Ti.Platform.displayCaps.platformWidth * 238 / 677
};

Alloy.createController("index");
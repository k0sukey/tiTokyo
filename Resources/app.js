var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.API.info(Ti.Platform.locale);

Alloy.CFG.i18n = Ti.Platform.locale === "ja" || Ti.Platform.locale === "ja-JP" ? "ja" : "en";

Ti.API.info(Alloy.CFG.i18n);

Alloy.CFG.index = {
    indicatorStyle: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
};

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
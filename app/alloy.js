// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.CFG.i18n = Ti.Platform.locale === 'ja' || Ti.Platform.locale === 'ja-JP' ? 'ja' : 'en';

Alloy.CFG.index = {
	indicatorStyle: OS_IOS ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG
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
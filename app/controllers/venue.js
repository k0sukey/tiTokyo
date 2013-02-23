var args = arguments[0] || {};

// Venue tab focus event
$.on('venue:focus', function(){
	// Annotation set
	$.map.selectAnnotation($.annotation);

	// GPS on
	$.map.applyProperties({
		userLocation: true
	});
});

// Venue tab blur event
$.on('venue:blur', function(){
	// GPS off
	$.map.applyProperties({
		userLocation: false
	});
});

// Dealign with toggle in-call status bar
if (OS_IOS) {
	$.on('venue:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
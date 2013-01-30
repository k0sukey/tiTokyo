$.on('speaker:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});
});

$.on('speaker:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

if (OS_IOS) {
	$.on('speaker:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
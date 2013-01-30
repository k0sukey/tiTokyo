$.on('agenda:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});
});

$.on('agenda:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

if (OS_IOS) {
	$.on('agenda:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
$.map.selectAnnotation($.annotation);

$.on('venue:focus', function(){});

$.on('venue:blur', function(){});

if (OS_IOS) {
	$.on('venue:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
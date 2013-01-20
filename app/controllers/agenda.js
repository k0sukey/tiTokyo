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
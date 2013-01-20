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
var Animation = require('alloy/animation');

var slideshow = [$.slide0, $.slide1, $.slide2, $.slide3, $.slide4];

var interval;

$.on('home:focus', function(){
	var current = 0;

	_.each(slideshow, function(item, index){
		item.applyProperties({
			opacity: index === 0 ? 1 : 0
		});
	});

	interval = setInterval(function(){
		var next = current + 1;
		if (next >= slideshow.length) {
			next = 0;
		}

		Animation.crossFade(slideshow[current], slideshow[next], 1000, function(){
			current = next;
		});
	}, 4000);

	$.container.applyProperties({
		scrollingEnabled: true
	});
});

$.on('home:blur', function(){
	clearInterval(interval);

	$.container.applyProperties({
		scrollingEnabled: false
	});
});
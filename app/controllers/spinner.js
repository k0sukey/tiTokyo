var Animation = require('alloy/animation');

var interval;

$.on('spinner:show', function(){
	Animation.fadeIn($.container, 200, function(){
		$.container.applyProperties({
			touchEnabled: true
		});
	});
});

$.on('spinner:dismiss', function(){
	Animation.fadeOut($.container, 200, function(){
		$.container.applyProperties({
			touchEnabled: false
		});
	});
});
var args = arguments[0] || {};

var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

// Slideshow array in image file path
var slideshow = [$.slide0, $.slide1, $.slide2, $.slide3, $.slide4];

// setInterval variable
var interval;

// Home tab focus event
$.on('home:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	// Slideshow current variable
	var current = 0;

	// Slideshow ImageView initialize
	_.each(slideshow, function(item, index){
		item.applyProperties({
			opacity: index === 0 ? 1 : 0
		});
	});

	// Slideshow start
	interval = setInterval(function(){
		var next = current + 1;
		// Reset
		if (next >= slideshow.length) {
			next = 0;
		}

		Animation.crossFade(slideshow[current], slideshow[next], 1000, function(){
			current = next;
		});
	}, 4000);

	// Network online check
	if (!Ti.Network.online) {
		// Show retry dialog
		Dialogs.confirm({
			title: L('home_error_title'),
			message: L('home_error_network'),
			yes: L('home_error_yes'),
			no: L('home_error_no'),
			callback: function(){
				clearInterval(interval);
				$.trigger('home:focus');
			}
		});

		return;
	}

	// Home data from ACS / CustomObjects
	args.parent.trigger('progress:show', {
		callback: function(){
			var home = Alloy.createCollection('home');
			home.fetch({
				read: 'query',
				data: {
					limit: 1000,
					skip: 0,
					order: '-order'
				},
				success: function(collection, data){
					// Suck ACS sort bug
					data.reverse();

					_.each(data, function(item){
						var description = Alloy.createController('description', item);
						$.container.add(description.getView());
						Animation.fadeIn(description.getView(), 200);
					});

					args.parent.trigger('progress:dismiss');
				},
				error: function(collection, data){
					args.parent.trigger('progress:dismiss');

					// Show retry dialog
					Dialogs.confirm({
						title: L('home_error_title'),
						message: L('home_error_xhr'),
						yes: L('home_error_yes'),
						no: L('home_error_no'),
						callback: function(){
							clearInterval(interval);
							$.trigger('home:focus');
						}
					});
				}
			});
		}
	});
});

// Home tab blur event
$.on('home:blur', function(){
	// Slideshow end
	clearInterval(interval);

	$.container.applyProperties({
		scrollingEnabled: false
	});
});

// Dealign with toggle in-call status bar
if (OS_IOS) {
	$.on('home:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
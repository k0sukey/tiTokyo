var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

var slideshow = [$.slide0, $.slide1, $.slide2, $.slide3, $.slide4];

var interval;

$.on('home:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

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

	if (!Ti.Network.online) {
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

	Alloy.Globals.progress.trigger('progress:show', function(){
		var home = Alloy.createCollection('home');
		home.fetch({
			read: 'query',
			data: {
				limit: 1000,
				skip: 0,
				order: '-order'
			},
			success: function(collection, data){
				data.reverse();

				_.each(data, function(item){
					var description = Alloy.createController('description', item);
					$.container.add(description.getView());
					Animation.fadeIn(description.getView(), 200);
				});

				Alloy.Globals.progress.trigger('progress:dismiss');
			},
			error: function(collection, data){
				Alloy.Globals.progress.trigger('progress:dismiss');

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
	});
});

$.on('home:blur', function(){
	clearInterval(interval);

	$.container.applyProperties({
		scrollingEnabled: false
	});
});

if (OS_IOS) {
	$.on('home:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
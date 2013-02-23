var args = arguments[0] || {};

var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

// Speaker tab focus event
$.on('speaker:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	// Network online check
	if (!Ti.Network.online) {
		// Show retry dialog
		Dialogs.confirm({
			title: L('speaker_error_title'),
			message: L('speaker_error_network'),
			yes: L('speaker_error_yes'),
			no: L('speaker_error_no'),
			callback: function(){
				$.trigger('speaker:focus');
			}
		});

		return;
	}

	// Speaker data from ACS / CustomObjects
	args.parent.trigger('progress:show', {
		callback: function(){
			var speaker = Alloy.createCollection('speaker');
			speaker.fetch({
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
						var person = Alloy.createController('person', item);
						$.container.add(person.getView());
						Animation.fadeIn(person.getView(), 200);
					});

					args.parent.trigger('progress:dismiss');
				},
				error: function(collection, data){
					args.parent.trigger('progress:dismiss');

					// Show retry dialog
					Dialogs.confirm({
						title: L('speaker_error_title'),
						message: L('speaker_error_xhr'),
						yes: L('speaker_error_yes'),
						no: L('speaker_error_no'),
						callback: function(){
							$.trigger('speaker:focus');
						}
					});
				}
			});
		}
	});
});

// Speaker tab blur event
$.on('speaker:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

// Dealign with toggle in-call status bar
if (OS_IOS) {
	$.on('speaker:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
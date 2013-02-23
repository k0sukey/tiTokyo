var args = arguments[0] || {};

var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

// Agenda tab focus event
$.on('agenda:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	// Network online check
	if (!Ti.Network.online) {
		// Show retry dialog
		Dialogs.confirm({
			title: L('agenda_error_title'),
			message: L('agenda_error_network'),
			yes: L('agenda_error_yes'),
			no: L('agenda_error_no'),
			callback: function(){
				$.trigger('agenda:focus');
			}
		});

		return;
	}

	// Agenda data from ACS / CustomObjects
	args.parent.trigger('progress:show', {
		callback: function(){
			var agenda = Alloy.createCollection('agenda');
			agenda.fetch({
				read: 'query',
				data: {
					limit: 1000,
					skip: 0,
					order: '-started_at'
				},
				success: function(collection, data){
					// Suck ACS sort bug
					data.reverse();

					_.each(data, function(item){
						var topic = Alloy.createController('topic', item);
						$.container.add(topic.getView());
						Animation.fadeIn(topic.getView(), 200);
					});

					args.parent.trigger('progress:dismiss');
				},
				error: function(collection, data){
					args.parent.trigger('progress:dismiss');

					// Show retry dialog
					Dialogs.confirm({
						title: L('agenda_error_title'),
						message: L('agenda_error_xhr'),
						yes: L('agenda_error_yes'),
						no: L('agenda_error_no'),
						callback: function(){
							$.trigger('agenda:focus');
						}
					});
				}
			});
		}
	});
});

// Agenda tab blur event
$.on('agenda:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

// Dealign with toggle in-call status bar
if (OS_IOS) {
	$.on('agenda:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
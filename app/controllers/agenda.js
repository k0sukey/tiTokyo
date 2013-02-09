var args = arguments[0] || {};

var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

$.on('agenda:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	if (!Ti.Network.online) {
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
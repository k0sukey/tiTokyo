var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');

$.on('speaker:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	if (!Ti.Network.online) {
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

	Alloy.Globals.progress.trigger('progress:show', function(){
		var speaker = Alloy.createCollection('speaker');
		speaker.fetch({
			read: 'query',
			data: {
				limit: 1000,
				skip: 0,
				order: '-order'
			},
			success: function(collection, data){
				data.reverse();

				_.each(data, function(item){
					var person = Alloy.createController('person', item);
					$.container.add(person.getView());
					Animation.fadeIn(person.getView(), 200);
				});

				Alloy.Globals.progress.trigger('progress:dismiss');
			},
			error: function(collection, data){
				Alloy.Globals.progress.trigger('progress:dismiss');

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
	});
});

$.on('speaker:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

if (OS_IOS) {
	$.on('speaker:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
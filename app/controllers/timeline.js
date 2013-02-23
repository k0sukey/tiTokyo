var args = arguments[0] || {};

var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');
var Social = require('alloy/social').create({
	consumerKey: Ti.App.Properties.getString('twitter-consumerKey'),
	consumerSecret: Ti.App.Properties.getString('twitter-consumerSecret')
});

function doPost() {
	var post = Alloy.createController('post');
	$.base.add(post.getView());

	$.shadow.animate({
		opacity: 0.4,
		duartion: 200
	}, function(){
		$.shadow.applyProperties({
			touchEnabled: true
		});

		Animation.popIn(post.getView(), function(){
			post.trigger('post:show');
		});
	});

	post.on('post:share', function(e){
		Animation.fadeOut(post.getView(), 200, function(){
			$.base.remove(post.getView());
			post = null;

			Animation.fadeOut($.shadow, 200);

			var share = (function(){
				args.parent.trigger('progress:show', {
					callback: function(){
						Social.share({
							message: e.message,
							success: function(e){
								args.parent.trigger('progress:dismiss');
							},
							error: function(e){
								args.parent.trigger('progress:dismiss', function(){
									// Show retry dialog
									Dialogs.confirm({
										title: L('timeline_error_title'),
										message: L('timeline_error_post'),
										yes: L('timeline_error_yes'),
										no: L('timeline_error_no'),
										callback: function(){
											share();
										}
									});
								});
							}
						});
					}
				});
			})();
		});
	});

	post.on('post:dismiss', function(){
		Animation.fadeOut(post.getView(), 200, function(){
			$.base.remove(post.getView());
			post = null;
		});

		Animation.fadeOut($.shadow, 200);
	});
}

$.buttonpost.addEventListener('click', function(){
	if (!Social.isAuthorized()) {
		// Twitter OAuth authorize
		Social.authorize(doPost);
	} else {
		// Show tweet view
		doPost();
	}
});

// Timeline tab focus event
$.on('timeline:focus', function(){
	$.container.applyProperties({
		scrollingEnabled: true
	});

	// Network online check
	if (!Ti.Network.online) {
		// Show retry dialog
		Dialogs.confirm({
			title: L('timeline_error_title'),
			message: L('timeline_error_network'),
			yes: L('timeline_error_yes'),
			no: L('timeline_error_no'),
			callback: function(){
				$.trigger('timeline:focus');
			}
		});

		return;
	}

	args.parent.trigger('progress:show', {
		callback: function(){
			var timeline = Alloy.createCollection('timeline');
			timeline.fetch({
				success: function(collection, data){
					_.each(data, function(_item){
						if (_.isArray(_item)) {
							_.each(_item, function(item){
								var tweet = Alloy.createController('tweet', item);
								$.container.add(tweet.getView());
								Animation.fadeIn(tweet.getView(), 200);
							});
						}
					});

					args.parent.trigger('progress:dismiss');
				},
				error: function(collection, data){
					args.parent.trigger('progress:dismiss');

					// Show retry dialog
					Dialogs.confirm({
						title: L('timeline_error_title'),
						message: L('timeline_error_xhr'),
						yes: L('timeline_error_yes'),
						no: L('timeline_error_no'),
						callback: function(){
							$.trigger('timeline:focus');
						}
					});
				}
			});
		}
	});
});

// Timeline tab blur event
$.on('timeline:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

// Dealign with toggle in-call status bar
if (OS_IOS) {
	$.on('timeline:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
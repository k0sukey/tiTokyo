var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');
var Social = require('alloy/social');

var twitter = Social.create({
	consumerKey: Ti.App.Properties.getString('twitter-consumerKey'),
	consumerSecret: Ti.App.Properties.getString('twitter-consumerSecret')
});

function doTimeline() {
	if (!Ti.Network.online) {
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

	Alloy.Globals.progress.trigger('progress:show', function(){
		var timeline = Alloy.createCollection('timeline');
		timeline.fetch({
			success: function(collection, data){
				var children = $.container.getChildren();
				_.each(children, function(child, index){
					if (index > 0) {
						$.container.remove(child);
					}
				});

				_.each(data, function(_item){
					if (_.isArray(_item)) {
						_.each(_item, function(item){
							var tweet = Alloy.createController('tweet', item);
							$.container.add(tweet.getView());
							Animation.fadeIn(tweet.getView(), 200);
						});
					}
				});

				Alloy.Globals.progress.trigger('progress:dismiss');
			},
			error: function(collection, data){
				Alloy.Globals.progress.trigger('progress:dismiss');

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
	});
}

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
				Alloy.Globals.progress.trigger('progress:show', function(){
					twitter.share({
						message: e.message,
						success: function(e){
							Alloy.Globals.progress.trigger('progress:dismiss');
						},
						error: function(e){
							Alloy.Globals.progress.trigger('progress:dismiss', function(){
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

$.buttonpost.on('click', function(){
	if (!twitter.isAuthorized()) {
		twitter.authorize(doPost);
	} else {
		doPost();
	}
});

$.on('timeline:focus', function(){
	doTimeline();

	$.container.applyProperties({
		scrollingEnabled: true
	});
});

$.on('timeline:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});

if (OS_IOS) {
	$.on('timeline:layout', function(){
		$.container.applyProperties({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
	});
}
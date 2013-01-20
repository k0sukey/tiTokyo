var Animation = require('alloy/animation');
var Dialogs = require('alloy/dialogs');
var Social = require('alloy/social');

var twitter = Social.create({
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

			var activityIndicator = Ti.UI.createActivityIndicator({
				style: OS_IOS ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG
			});
			$.base.add(activityIndicator);

			activityIndicator.show();

			twitter.share({
				message: e.message,
				success: function(e){
					activityIndicator.hide();
					$.base.remove(activityIndicator);

					Animation.fadeOut($.shadow, 200, function(){
						$.shadow.applyProperties({
							touchEnabled: false
						});
					});
				},
				error: function(e){
					activityIndicator.hide();
					$.base.remove(activityIndicator);

					Animation.fadeOut($.shadow, 200, function(){
						$.shadow.applyProperties({
							touchEnabled: false
						});

						Dialogs.confirm({
							title: L('timeline_error_title'),
							message: L('timeline_error_post'),
							yes: L('timeline_error_yes'),
							no: L('timeline_error_no')
						});
					});
				}
			});
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
	} else {
		$.shadow.animate({
			opacity: 0.4,
			duartion: 200
		}, function(){
			$.shadow.applyProperties({
				touchEnabled: true
			});
		});

		var activityIndicator = Ti.UI.createActivityIndicator({
			style: OS_IOS ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG
		});
		$.base.add(activityIndicator);

		activityIndicator.show();

		var timeline = Alloy.createCollection('timeline');
		timeline.fetch({
			success: function(collection, data){
				Animation.fadeOut($.shadow, 200, function(){
					activityIndicator.hide();
					$.base.remove(activityIndicator);

					$.shadow.applyProperties({
						touchEnabled: false
					});
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
			},
			error: function(collection, data){
				Animation.fadeOut($.shadow, 200, function(){
					activityIndicator.hide();
					$.base.remove(activityIndicator);

					$.shadow.applyProperties({
						touchEnabled: false
					});
				});

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

	$.container.applyProperties({
		scrollingEnabled: true
	});
});

$.on('timeline:blur', function(){
	$.container.applyProperties({
		scrollingEnabled: false
	});
});
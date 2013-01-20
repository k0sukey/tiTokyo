var Moment = require('alloy/moment');

var args = arguments[0] || {};

$.icon.applyProperties({
	image: args.profile_image_url
});

$.username.applyProperties({
	text: '@' + args.from_user
});

$.timestamp.applyProperties({
	text: Moment(args.created_at).utc().local().fromNow()
});

$.tweet.applyProperties({
	text: args.text
});
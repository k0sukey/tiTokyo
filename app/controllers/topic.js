var Moment = require('alloy/moment');

var args = arguments[0] || {};

$.schedule.applyProperties({
	text: Moment(args.started_at).utc().local().format('HH:mm') + ' - ' + Moment(args.ended_at).utc().local().format('HH:mm')
});

$.content.applyProperties({
	text: args.content[Alloy.CFG.i18n]
});
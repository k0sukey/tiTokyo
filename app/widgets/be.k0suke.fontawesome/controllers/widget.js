var args = arguments[0] || {};

var fontawesome = require(WPATH('IconicFont')).IconicFont({
	font: WPATH('FontAwesome')
});

args.text = fontawesome.icon(args.icon);

if (!args.font) {
	args.font = {};
}
args.font.fontFamily = fontawesome.fontfamily();

$.Widget.applyProperties(args);

exports.setProperties = function(options){
	if (options.icon) {
		options.text = fontawesome.icon(options.icon);
	}

	$.Widget.applyProperties(options);
};

exports.getProperties = function(option){
	return $.Widget[option];
};

[
	'add',
	'addEventListener',
	'animate',
	'applyProperties',
	'convertPointToView',
	'fireEvent',
	'hide',
	'remove',
	'removeEventListener',
	'show',
	'toImage'
].forEach(function(func){
	exports[func] = $.Widget[func];
});
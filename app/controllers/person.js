var args = arguments[0] || {};

$.name.applyProperties({
	text: args.name[Alloy.CFG.i18n]
});

$.title.applyProperties({
	text: args.title[Alloy.CFG.i18n]
});

$.photo.applyProperties({
	image: args.photo.urls.original
});

$.content.applyProperties({
	text: args.content[Alloy.CFG.i18n]
});
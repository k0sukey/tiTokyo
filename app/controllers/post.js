$.on('post:show', function(){
	$.textarea.focus();
});

$.buttonpost.on('click', function(){
	$.textarea.blur();
	$.trigger('post:share', {
		message: $.textarea.getValue()
	});
});

$.buttoncancel.on('click', function(){
	$.textarea.blur();
	$.trigger('post:dismiss');
});
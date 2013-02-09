$.on('post:show', function(){
	$.textarea.focus();
});

$.buttonpost.addEventListener('click', function(){
	$.textarea.blur();
	$.trigger('post:share', {
		message: $.textarea.getValue()
	});
});

$.buttoncancel.addEventListener('click', function(){
	$.textarea.blur();
	$.trigger('post:dismiss');
});
var visibled = true;

$.logo.on('click', function(){
	visibled = visibled ? false : true;

	$.trigger('navigation:logo', {
		visibled: visibled
	});
});
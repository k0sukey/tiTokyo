var visibled = true;

$.logo.addEventListener('click', function(){
	visibled = visibled ? false : true;

	$.trigger('navigation:logo', {
		visibled: visibled
	});
});
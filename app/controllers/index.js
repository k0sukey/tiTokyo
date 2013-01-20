var Animation = require('alloy/animation');

var tab = 'home';

var current = Alloy.createController('home');
current.getView().applyProperties({
	opacity: 1
});
$.content.add(current.getView());
current.trigger('home:focus');

var info = Alloy.createController('info');

$.navigation.on('navigation:logo', function(e){
	if (e.visibled) {
		Animation.fadeOut(info.getView(), 200, function(){
			current.trigger(tab + ':focus');

			$.modal.remove(info.getView());
			info.getView().scrollTo(0, 0);
			info.getView().applyProperties({
				opacity: 0
			});

			$.modal.applyProperties({
				opacity: 0,
				touchEnabled: false
			});
		});
	} else {
		$.modal.applyProperties({
			opacity: 1,
			touchEnabled: true
		});

		$.modal.add(info.getView());
		Animation.fadeIn(info.getView(), 200, function(){
			current.trigger(tab + ':blur');
		});
	}
});

$.tab.on('tab:change', function(e){
	var next = Alloy.createController(e.after);
	$.content.add(next.getView());

	current.trigger(e.before + ':blur');

	Animation.crossFade(current.getView(), next.getView(), 200, function(){
		tab = e.after;

		next.trigger(e.after + ':focus');
		$.tab.trigger('tab:changed');

		$.content.remove(current.getView());
		current = next;
	});
});

$.index.open();
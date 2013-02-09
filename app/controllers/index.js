var Animation = require('alloy/animation');

// GPS purpose
Ti.Geolocation.purpose = L('gps_purpose');

$.navigation.on('navigation:logo', function(e){
	if (e.visibled) {
		// Page dismiss
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
		// Page show
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

// Change event of tab and page
$.tab.on('tab:change', function(e){
	var next = Alloy.createController(e.after, {
		parent: $
	});
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

// Progress events(show / dismiss)
$.on('progress:show', function(e){
	e = e || {};

	$.progress.applyProperties({
		opacity: 1,
		touchEnabled: true
	});

	$.shadow.animate({
		opacity: 0.4,
		duration: 200
	}, function(){
		$.indicator.show();

		if (e.callback) {
			e.callback();
		}
	});
});

$.on('progress:dismiss', function(e){
	e = e || {};

	$.indicator.hide();
	$.shadow.animate({
		opacity: 0,
		duration: 200
	}, function(){
		$.progress.applyProperties({
			opacity: 0,
			touchEnabled: false
		});

		if (e.callback) {
			e.callback();
		}
	});
});

// Parent window open
$.index.open();

// Current tab and page setting
var tab = 'home';

var current = Alloy.createController('home', {
	parent: $
});
current.getView().applyProperties({
	opacity: 1
});
$.content.add(current.getView());
current.trigger('home:focus');

// Special information page setting
var info = Alloy.createController('info');

if (OS_IOS) {
	var TiDisplay = require('be.k0suke.tidisplay');
	var statusBarHeight = TiDisplay.mainScreenHeight - TiDisplay.applicationFrameHeight;

	$.index.addEventListener('changelayout', function(){
		var changedHeight = TiDisplay.mainScreenHeight - TiDisplay.applicationFrameHeight;

		if (statusBarHeight !== changedHeight) {
			$.content.applyProperties({
				top: '65dp',
				bottom: '46dp'
			});

			current.trigger(tab + ':layout');
			statusBarHeight = changedHeight;
		}
	});
}
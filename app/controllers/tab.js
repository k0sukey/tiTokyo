var current = 'home';

$.on('tab:changed', function(){
	_.each(['home', 'agenda', 'speaker', 'timeline', 'venue'], function(item){
		$['tab' + item].applyProperties({ touchEnabled: true });
	});
});

function doTab(tab) {
	_.each(['home', 'agenda', 'speaker', 'timeline', 'venue'], function(item){
		$['tab' + item].applyProperties({ touchEnabled: false });

		if (tab === item) {
			$['icon' + item].setProperties({ color: '#00bfff' });
			$['title' + item].applyProperties({ color: '#00bfff' });
		} else {
			$['icon' + item].setProperties({ color: '#fff' });
			$['title' + item].applyProperties({ color: '#fff' });
		}
	});

	$.trigger('tab:change', {
		before: current,
		after: tab
	});

	current = tab;
}

$.tabhome.on('click', function(){
	doTab('home');
});

$.tabagenda.on('click', function(){
	doTab('agenda');
});

$.tabspeaker.on('click', function(){
	doTab('speaker');
});

$.tabtimeline.on('click', function(){
	doTab('timeline');
});

$.tabvenue.on('click', function(){
	doTab('venue');
});
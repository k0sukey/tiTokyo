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

$.tabhome.addEventListener('click', function(){
	doTab('home');
});

$.tabagenda.addEventListener('click', function(){
	doTab('agenda');
});

$.tabspeaker.addEventListener('click', function(){
	doTab('speaker');
});

$.tabtimeline.addEventListener('click', function(){
	doTab('timeline');
});

$.tabvenue.addEventListener('click', function(){
	doTab('venue');
});
var btn = Titanium.UI.createButton({
	left : 10,
	top : 50,
	title : 'Click Me',
	borderColor : 'red'

});
btn.addEventListener('click', function(e) {
	var home_win = Alloy.createController('home_win').getView().open();
});

/// NO Ti.UI.SIZE can in item Template so you have to take view and add items in it .

$.index.add(btn);
$.index.open();

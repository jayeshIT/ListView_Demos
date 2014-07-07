var view = Titanium.UI.createView({
	top : 0,
	left : 0,
	right : 09,
	height : 50,
	backgroundColor : 'black'
});
var btn = Titanium.UI.createButton({
	left : 10,
	title : 'Close'
});
btn.addEventListener('click', function(e) {
	$.home_win.close();
});
var btnright = Titanium.UI.createButton({
	right : 10,
	title : 'Refresh'
});
btnright.addEventListener('click', function(e) {
	Alloy.Globals.forSaleFunction();
});
view.add(btn);
view.add(btnright);
$.home_win.add(view);

Alloy.Globals.forSaleFunction = function() {
	var dataitems = [];
	for (var i = 0; i < 20; i++) {
		var item_data = {
			propperties : {
				desc_data : 'Demo Desc',
				date_obj_data : 'Demo Date',
				email_data : 'jnj.idr@gmail.com'
			},
			image_view : {
				image : '/appicon.png'
			},
			desc_lbl : {
				text : 'This is desc' + i
			},
			email_lbl : {
				text : 'jnj.idr@gmail.com'
			},
			date_lbl : {
				text : '1/1/2001'
			}
		};
		dataitems.push(item_data);
	}
	$.list_section.setItems(dataitems);
};
Alloy.Globals.forSaleFunction();
$.list_View_classified.addEventListener('itemclick', function(e) {
	var item = e.section.getItemAt(e.itemIndex);
	Ti.API.info('----- JSON ' + JSON.stringify(item));
	var theSection = e.section;
	var pos = e.itemIndex;

	if (OS_IOS) {
		theSection.deleteItemsAt(pos, 1, {
			animationStyle : Titanium.UI.iPhone.RowAnimationStyle.LEFT
		});
	} else {
		theSection.deleteItemsAt(pos, 1);
	}
});


var pageid1 = 0;
var endlimit1 = 5;
var req_header = [];
req_header.push({
	title : "Content-Type",
	value : "application/x-www-form-urlencoded"
});

Alloy.Globals.forSaleFunction = function(page_id, rows) {
	var dataitems = [];
	var sc_forsale = function(jsobj1) {
		Titanium.API.info('===SALE :' + jsobj1);
		var jsobj = JSON.parse(jsobj1);
		if (jsobj.result != 0) {
			for (var i = 0; i < jsobj.data.length; i++) {
				var item_data = Alloy.createController('listview_item/listitem_classified', {
					// classifiedImages : jsobj.data[i].classifiedImages,
					// desc : jsobj.data[i].desc,
					// email : jsobj.data[i].email,
					// isSold : jsobj.data[i].isSold,
					// addedOn : jsobj.data[i].addedOn,
					// price : jsobj.data[i].price,
					// date_obj : jsobj.data[i].date_obj,

					classifiedImages : ['appicon.png'],
					desc : 'this is desc',
					email : 'jnj.idr@gmail.com',

					date_obj : '10-10-2010',

				}).getView();
				dataitems.push(item_data);
			}
			if (pageid1 == 0) {
				$.listview_section.setItems(dataitems);
			} else {
				$.listview_section.appendItems(dataitems);
			}
		}
	};
	var er_forsale = function(e) {
		Titanium.API.info('===error :' + e.error);
	};
	var post_data = 'post_json=' + '{"method":"classified_sell","body":[{"start_sell":"' + page_id + '","end_sell":"' + rows + '","user_id_classified_sell":"' + 907 + '"}]}';
	Alloy.Globals.global_xhr("yuor url", req_header, "POST", sc_forsale, er_forsale, post_data, 1000);
};
Alloy.Globals.forSaleFunction(pageid1, endlimit1);

$.ClassifiedWin.open();

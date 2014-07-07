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

				var item_data = {
					propperties : {
						desc_data : jsobj.data[i].desc,
						date_obj_data : jsobj.data[i].date_obj,
						email_data : jsobj.data[i].email

						//assign property data
					},
					image_view : {
						//image : jsobj.data[i].classifiedImages[0]
						image : '/appicon.png'
					},
					desc_lbl : {
						//text : jsobj.data[i].desc
						text : 'Description data'
					},
					email_lbl : {
						//text : jsobj.data[i].email
						text : 'jnj.idr@gmail.com'
					},
					date_lbl : {
						//text : jsobj.data[i].date_obj
						text : '10-10-2021'
					}
				};
				dataitems.push(item_data);
			}
			if (pageid1 == 0) {
				$.list_section.setItems(dataitems);
			} else {
				$.list_section.appendItems(dataitems);
			}
		}
	};
	var er_forsale = function(e) {
		Titanium.API.info('===error :' + e.error);
	};
	var post_data = 'post_json=' + '{"method":"classified_sell","body":[{"start_sell":"' + page_id + '","end_sell":"' + rows + '","user_id_classified_sell":"' + 907 + '"}]}';
	Alloy.Globals.global_xhr("your URL", req_header, "POST", sc_forsale, er_forsale, post_data, 1000);
};
Alloy.Globals.forSaleFunction(pageid1, endlimit1);

$.list_View_classified.addEventListener('itemclick', function(e) {
	var item = e.section.getItemAt(e.itemIndex);
	Ti.API.info('----- JSON ' + JSON.stringify(item));
});

$.index.open();

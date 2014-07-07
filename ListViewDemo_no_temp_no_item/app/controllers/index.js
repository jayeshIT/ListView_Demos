var pageid1 = 0;
var endlimit1 = 5;

var req_header = [];
req_header.push({
	title : "Content-Type",
	value : "application/x-www-form-urlencoded"
});
var template_classified = {

	properties : {
		height : 90,
		backgroundColor : 'white',
		selectedBackgroundColor : 'transparent',
		selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.NONE
	},
	events : {
	},
	childTemplates : [{
		type : 'Ti.UI.ImageView',
		bindId : 'img_view',
		properties : {
			left : 10,
			height : 60,
			width : 60,
			borderRadius : 30
		}

	}, {
		type : 'Ti.UI.Label',
		bindId : 'desc_lbl',
		properties : {
			top : 5,
			height : 30,
			left : 80
		}
	}, {
		type : 'Ti.UI.Label',
		bindId : 'email_lbl',
		properties : {
			height : 30,
			left : 80
		}
	}, {
		type : 'Ti.UI.Label',
		bindId : 'date_lbl',
		properties : {
			bottom : 5,
			height : 30,
			left : 80
		}
	}]

};
var temp = {
	templates : {
		'plain' : template_classified
	},
	defaultItemTemplate : 'plain'
};
$.listView1.applyProperties(temp);

var listView_section = Titanium.UI.createListSection();

Alloy.Globals.forSaleFunction = function(page_id, rows) {
	var dataitems = [];
	var sc_forsale = function(jsobj1) {
		Titanium.API.info('===SALE :' + jsobj1);
		var jsobj = JSON.parse(jsobj1);
		if (jsobj.result != 0) {
			for (var i = 0; i < jsobj.data.length; i++) {
				dataitems.push({
					img_view : {
						//image : jsobj.data[i].classifiedImages
						image : 'appicon-72.png'
					},
					desc_lbl : {
						//text : jsobj.data[i].desc
						text : 'Description'
					},
					email_lbl : {
						//text : jsobj.data[i].email
						text : 'jnj.idr@gmail.com'
					},
					date_lbl : {
						//text : jsobj.data[i].date_obj
						text : '10-10-2014'
					}
				});
			}
		}
		if (pageid1 == 0) {
			listView_section.setItems(dataitems);
		} else {
			listView_section.appendItems(dataitems);
		}
		$.listView1.sections = [listView_section];
	};
	var er_forsale = function(e) {

	};
	var post_data = 'post_json=' + '{"method":"classified_sell","body":[{"start_sell":"' + page_id + '","end_sell":"' + rows + '","user_id_classified_sell":"' + 907 + '"}]}';
	Alloy.Globals.global_xhr("your URL", req_header, "POST", sc_forsale, er_forsale, post_data, 1000);
};

Alloy.Globals.forSaleFunction(pageid1, endlimit1);
$.index.open();

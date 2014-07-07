var data_array = {
	"data" : [{
		"id" : "523",
		"eventEmail" : "jnj.idr@gmail.com",
		"eventDate" : "Fri, Jun 06 2014",
		"date_obj" : "06-06-2014",
		"eventDesc" : "Come all to meet!",
		"eventImage" : "/appicon.png"
	}, {
		"id" : "522",
		"eventEmail" : "jayesh.joshi@gmail.com",
		"eventDate" : "Wed, Jun 04 2014",
		"date_obj" : "04-06-2014",
		"eventDesc" : "today!",
		"eventImage" : "/appicon.png"
	}, {
		"id" : "521",
		"eventEmail" : "jayesh.joshi@gmail.com",
		"eventDate" : "Mon, Jun 09 2014",
		"date_obj" : "09-06-2014",
		"eventDesc" : " Come all to Ryders meet This is deo desc",
		"eventImage" : "/appicon.png",
		"eventcategory_id" : "1",
		"addedOn" : "Wed, Jun 11 2014"
	}, {
		"id" : "520",
		"eventEmail" : "jayesh.joshi@gmail.com",
		"eventDate" : "Wed, Mar 26 2014",
		"date_obj" : "26-03-2014",
		"eventDesc" : "This is My event description",
		"eventImage" : "/appicon.png"
	}],
	"classified" : [{
		"classifiedID" : "682",
		"user_id" : "894",
		"classifiedImages" : ["/appicon.png"],
		"desc" : "Yamaha",
		"email" : "jnj.idr@gmail.com",
		"isSold" : "Sell",
		"addedOn" : "Fri, May 30 2014"
	}, {
		"classifiedID" : "681",
		"user_id" : "894",
		"classifiedImages" : ["/appicon.png"],
		"desc" : "Yamah\t",
		"email" : "jnj.idr@gmail.com",
		"isSold" : "Sell",
		"addedOn" : "Fri, May 30 2014"
	}]
};

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
	for (var i = 0; i < data_array.classified.length; i++) {
		var item_data = {
			template : 'item_template',
			image_view : {
				image : data_array.classified[i].classifiedImages[0]
			},
			desc_lbl : {
				text : data_array.classified[i].desc
			},
			email_lbl : {
				text : data_array.classified[i].email
			},
			date_lbl : {
				text : data_array.classified[i].addedOn
			}
		};
		dataitems.push(item_data);
	}
	for (var i = 0; i < data_array.data.length; i++) {
		var item_data = {
			template : 'item_template_events',
			image_view : {
				image : data_array.data[i].eventImage
			},
			desc_lbl : {
				text : data_array.data[i].eventDesc
			}
		};
		dataitems.push(item_data);
	}
	$.list_section.setItems(dataitems);
};

Alloy.Globals.forSaleFunction();


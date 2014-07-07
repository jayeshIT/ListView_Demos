// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.global_xhr = function(url, reqheader, method, successcallback, errocallback, data, timeout) {
	try {

		var xhr = Titanium.Network.createHTTPClient();
		xhr.onload = function(e) {

			Ti.API.info('-RESPOSE TEXT:' + this.responseText);
			if (this.responseText != null && this.responseText != '' && this.responseText != "null" && this.responseText != 0 && this.responseText != "" && this.responseText != undefined) {
				var jsobj1 = this.responseText;
				if (successcallback) {
					successcallback(jsobj1);
				}
			} else {

				Alloy.Globals.showalertdialog(Alloy.Globals.servernot);
			}
		};
		xhr.onerror = function(e) {
			Titanium.API.info('XHR error in global function:' + e.error);
			
			if (errocallback) {
				errocallback({
					error : e.error
				});
			}
		};
		xhr.open(method, url);
		xhr.setTimeout(timeout);
		for (var i = 0; i < reqheader.length; i++) {
			xhr.setRequestHeader(reqheader[i].title, reqheader[i].value);
		}
		xhr.send(data);
	} catch(exr) {

	}
}; 
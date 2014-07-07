(function() {
	exports.Ui = {
		getPullView_android : function(obj_ListView, onRefeshCallback) {
			var android_pullrefresh = require('com.indianic.pullrefresh');
			var pullRefreshView = android_pullrefresh.createPullRefreshView({
				backgroundColor : 'white'
			});

			pullRefreshView.pullable({
				listView : obj_ListView,
				arrow : 'arrow_down',
				indicatorColor : '#00000',
				msgPull : L("pulldowntorefresh"),
				msgRelease : L("releasetorefresh"),
				msgRefreshing : L("updating"),
				msgLastUpdated : L("lastupdated"),
				msgDateFormat : 'dd/MM/yyyy hh:mm:ss', //'ago', //'yyyy/MM/dd hh:mm:ss',
				units : {
					'year' : 'Year Ago',
					'years' : 'Years Ago',
					'month' : 'Month Ago',
					'months' : 'Months Ago',
					'day' : 'Day Ago',
					'days' : 'Days Ago',
					'hour' : 'Hour Ago',
					'hours' : 'Hours Ago',
					'minute' : 'Minute Ago',
					'minutes' : 'Minutes Ago',
					'second' : 'Second Ago',
					'seconds' : 'Seconds Ago'
				},
				onRefresh : function() {
					Ti.API.info('OnRefresh');
					onRefeshCallback();
				},
				onPull : function(e) {
					switch(parseInt(e.state)) {
						case pullRefreshView.PULL_TO_REFRESH:
							Ti.API.info('State: PULL_TO_REFRESH');
							break;
						case pullRefreshView.RELEASE_TO_REFRESH:
							Ti.API.info('State: RELEASE_TO_REFRESH');
							break;
						case pullRefreshView.REFRESHING:
							Ti.API.info('State: REFRESHING');
							break;
					}
				}
			});
			return pullRefreshView;
		}
	};
})();

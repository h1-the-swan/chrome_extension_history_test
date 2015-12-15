function historyTest() {
	var microsecondsPerDay = 1000 * 60 * 60 * 24;
	var oneDayAgo = (new Date).getTime() - microsecondsPerDay;
	chrome.history.search({
		'text': '',
		'startTime': oneDayAgo
	},
	function(historyItems) {
		console.log(historyItems);
		for (var i = 0; i < historyItems.length; i++) {
			var url = historyItems[i].url;
			console.log(url);
			chrome.history.getVisits({url: url}, function(url) {console.log(url);});
		};
	});
}

document.addEventListener('DOMContentLoaded', function() {
	historyTest();
});

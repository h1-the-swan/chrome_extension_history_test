function historyTest() {
	var microsecondsPerDay = 1000 * 60 * 60 * 24;
	var oneDayAgo = (new Date).getTime() - microsecondsPerDay;
	chrome.history.search({
		'text': '',
		'startTime': oneDayAgo
	},
	function(historyItems) {
		console.log(historyItems);
	});
}

document.addEventListener('DOMContentLoaded', function() {
	historyTest();
});

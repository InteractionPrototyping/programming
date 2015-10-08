$(function () {

	// Select the whole weather object, when clicking on it
	$("#WeatherObject").click(function () {
		window.getSelection().selectAllChildren(this);
	});
});



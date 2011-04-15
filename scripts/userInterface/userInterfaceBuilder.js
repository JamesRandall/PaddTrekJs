define(["jquery", "metrics"], function($, metrics) {
	var buildScanner = function() {
		var canvas = $('<canvas id="scannerCanvas" width="' + metrics.scannerWidth + '" height="' + metrics.scannerHeight + '">')
			//.css("width", metrics.scannerWidth)
			//.css("height", metrics.scannerHeight)
			.css("position", "relative")
			.css("left", metrics.spacing)
			.css("top", metrics.spacing)
		return canvas;
	};
	
	return {
		buildMainScreen: function() {
			var gameUi = $('<div>').addClass("game").append(buildScanner());
			gameUi.appendTo($("#paddTrekContainer"));
			return gameUi;
		}
	};
});
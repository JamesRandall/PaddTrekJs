require(["jquery",
        "metrics",
		"model/modelFactory",
		"controllers/shortRangeController",
		"extensions/jsExtensions",
		"extensions/htmlExtensions",
		"extensions/paddTrekExtensions"], function($,metrics,modelFactory,shortRangeControllerFactory,jsExtensions,htmlExtensions, paddTrekExtensions) {
	jsExtensions();
	htmlExtensions();
	paddTrekExtensions();
	
    $(document).ready(function() {
		var model;
		var shortRangeController;
	
		$("#paddTrekContainer").append(
			$('<div>')
				.addClass("game")
				.append($('<canvas id="gameCanvas" width="' + metrics.gameWidth + '" height="' + metrics.gameHeight + '">'))
				.appendTo($("#paddTrekContainer"))
			);
		
		model = modelFactory();
		shortRangeController = shortRangeControllerFactory.create(model);
		shortRangeController.activate();
    });
});

require(["jquery", "views/userInterfaceBuilder", "views/scannerCanvas", "extensions/jsExtensions", "extensions/htmlExtensions", "model/modelFactory"], function($, uiBuilder,scannerCanvas,jsExtensions,htmlExtensions, modelFactory) {
	jsExtensions();
	htmlExtensions();
	
	var model = modelFactory();
	
    $(document).ready(function() {
	    
		uiBuilder.buildMainScreen();
		scannerCanvas.render(model.currentQuadrant);
    });
});

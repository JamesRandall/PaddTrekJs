require(["jquery", "userInterface/userInterfaceBuilder", "userInterface/scannerCanvas", "extensions", "model/modelFactory"], function($, uiBuilder,scannerCanvas,extendTypes, modelFactory) {
	extendTypes();
	
	var model = modelFactory();
	
    $(document).ready(function() {
	    
		uiBuilder.buildMainScreen();
		scannerCanvas.render();
    });
});

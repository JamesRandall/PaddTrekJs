require(["jquery", "userInterface/userInterfaceBuilder", "userInterface/scannerCanvas", "extensions"], function($, uiBuilder,scannerCanvas,extendTypes) {
	extendTypes();
	
    $(document).ready(function() {
	    
		uiBuilder.buildMainScreen();
		scannerCanvas.render();
    });
});

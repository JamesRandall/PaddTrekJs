define(["model/galaxyFactory", "model/rules"], function(galaxyFactory, rulesParam) {
	return function() {
		var model;
		model = {
			galaxy: galaxyFactory(),
			rules: rulesParam
		}
		
		model.currentQuadrant = model.galaxy.getQuadrant(Number.randomInteger(model.galaxy.width), Number.randomInteger(model.galaxy.height));

		return model;	
	}
});
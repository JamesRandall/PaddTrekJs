define(["model/galaxyFactory", "model/rules"], function(galaxyFactory, rulesParam)
	return function() {
		var model;
		model = {
			galaxy: galaxyFactory.create(),
			rules: rulesParam
		}
		
		model.currentSector = model.galaxy.getSector(Number.random(model.galaxy.width), Number.random(model.galaxy.height));

		return model;	
	}
);
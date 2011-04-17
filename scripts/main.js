require(["jquery",
		"metrics",
		"model/modelFactory",
		"canvas/sceneGraphFactory",
		"views/sceneObjects/scannerSceneObject",
		"views/sceneObjects/mainEnergySceneObject",
		"views/sceneObjects/shieldsSceneObject",
		"views/sceneObjects/weaponsSceneObject",
		"extensions/jsExtensions",
		"extensions/htmlExtensions",
		"extensions/paddTrekExtensions"], function($,metrics,modelFactory,sceneGraphFactory,scannerSceneObject,mainEnergySceneObject,shieldsSceneObject,weaponsSceneObject,jsExtensions,htmlExtensions, paddTrekExtensions) {
	jsExtensions();
	htmlExtensions();
	paddTrekExtensions();
	
    $(document).ready(function() {
		var model;
		var sceneGraph;
	
		$("#paddTrekContainer").append(
			$('<div>')
				.addClass("game")
				.append($('<canvas id="gameCanvas" width="' + metrics.gameWidth + '" height="' + metrics.gameHeight + '">'))
				.appendTo($("#paddTrekContainer"))
			);
		model  = modelFactory();
		sceneGraph = sceneGraphFactory.create($("#gameCanvas")[0]);
		sceneGraph.addSceneObject(scannerSceneObject(metrics.spacing, metrics.spacing, model.currentQuadrant));
		sceneGraph.addSceneObject(mainEnergySceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing));
		sceneGraph.addSceneObject(shieldsSceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing*2 + metrics.shortRange.energyPanelHeight));
		sceneGraph.addSceneObject(weaponsSceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing*3 + metrics.shortRange.energyPanelHeight + metrics.shortRange.shieldsPanelHeight));
		sceneGraph.render();
    });
});

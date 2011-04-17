define(["canvas/sceneGraphFactory",
	"views/sceneObjects/scannerSceneObject",
	"views/sceneObjects/mainEnergySceneObject",
	"views/sceneObjects/shieldsSceneObject",
	"views/sceneObjects/weaponsSceneObject",
	"metrics"],
	function(sceneGraphFactory,
		scannerSceneObject,
		mainEnergySceneObject,
		shieldsSceneObject,
		weaponsSceneObject,
		metrics) {
	{
		return {
			create: function(model) {
				var sceneGraph;
				sceneGraph = sceneGraphFactory.create($("#gameCanvas")[0]);
				sceneGraph.addSceneObject(scannerSceneObject(metrics.spacing, metrics.spacing, model.currentQuadrant));
				sceneGraph.addSceneObject(mainEnergySceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing));
				sceneGraph.addSceneObject(shieldsSceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing*2 + metrics.shortRange.energyPanelHeight));
				sceneGraph.addSceneObject(weaponsSceneObject(metrics.spacing*2 + metrics.shortRange.scannerWidth, metrics.spacing*3 + metrics.shortRange.energyPanelHeight + metrics.shortRange.shieldsPanelHeight));

				return sceneGraph;
			}
		}
	}
});
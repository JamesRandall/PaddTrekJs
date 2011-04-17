define(["../../metrics", "../../canvas/sceneObject"], function(metrics, sceneObjectFactory) {
	return function(x, y) {
		var sceneObject = sceneObjectFactory.create(x,y);
		sceneObject.renderSceneObject = function(context) {
			var x;
			var y;
			var index;
		
			context.lineWidth = metrics.lineWidth;		
			context.drawPanel(0,0,metrics.shortRange.energyPanelWidth, metrics.shortRange.energyPanelHeight);
			
		};
		return sceneObject;
	};
});
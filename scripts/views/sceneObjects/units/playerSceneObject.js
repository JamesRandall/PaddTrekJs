define(["../../../metrics", "../../../canvas/sceneObject"], function(metrics, sceneObjectFactory) {
	return function(x, y) {
		var sceneObject = sceneObjectFactory.create(x, y, metrics.shortRange.scannerWidth / 8, metrics.shortRange.scannerHeight / 8);
		
		function playerPath(context)
		{
			context.beginPath();
			context.moveTo(0.5 * sceneObject.width, 0);
			context.lineTo(0.25 * sceneObject.width, 0.58 * sceneObject.height);
			context.lineTo(0, 0.5 * sceneObject.height);
			context.lineTo(0.25 * sceneObject.width, 0.91 * sceneObject.height);
			context.lineTo(0.5 * sceneObject.width, 0.83 * sceneObject.height);
			context.lineTo(0.75 * sceneObject.width, 0.91 * sceneObject.height);
			context.lineTo(1.0 * sceneObject.width, 0.5 * sceneObject.height);
			context.lineTo(0.75 * sceneObject.width, 0.58 * sceneObject.height);
			context.closePath();
		}
		
		sceneObject.renderSceneObject = function(context) {
			playerPath(context);
			context.strokeStyle = "cyan";
			context.stroke();
		};
		return sceneObject;
	};
});
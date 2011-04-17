define(["../../metrics", "../../canvas/sceneObject"], function(metrics, sceneObjectFactory) {
	return function(x, y, currentQuadrant) {
		var sceneObject = sceneObjectFactory.create(x,y);
		sceneObject.quadrant = currentQuadrant;
		sceneObject.renderSceneObject = function(context) {
			var cellWidth;
			var cellHeight;
			var x;
			var y;
			var index;
		
			context.lineWidth = metrics.lineWidth;
		
			context.drawPanel(0,0,metrics.shortRange.scannerWidth, metrics.shortRange.scannerHeight);
			
			context.strokeStyle = "green";
		
			cellWidth = Math.floor(metrics.shortRange.scannerWidth / this.quadrant.width);
			cellHeight = Math.floor(metrics.shortRange.scannerHeight / this.quadrant.height);
		
			x = cellWidth + metrics.lineWidth/2;
			for (index = 0; index < this.quadrant.width-1; index++)
			{
				context.dashedLineTo(x, 1.5, x, metrics.shortRange.scannerHeight-2);
				x += cellWidth;
			}
		
			y = cellHeight + metrics.lineWidth/2;
			for (index = 0; index < this.quadrant.height-1; index++)
			{
				context.dashedLineTo(1.5, y, metrics.shortRange.scannerWidth-2, y);
				y += cellHeight;
			}
		
			context.stroke();
		};
		return sceneObject;
	};
});
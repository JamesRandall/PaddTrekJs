define(["jquery", "metrics"], function($, metrics) {
	function getCanvas()
	{
		return $("#scannerCanvas");
	}
	
	function getContext()
	{
		return $("#scannerCanvas")[0].getContext("2d");
	}
	
	
	return {
		clear: function() {
			var canvas = getCanvas();
			canvas.width = canvas.width+1;
			canvas.width = canvas.width-1;
		},
		
		render: function(currentSector) {
			var context;
			var canvas;
			var cellWidth;
			var cellHeight;
			var x;
			var y;
			var index;
		
			
			canvas = getCanvas();
			context = getContext();
			
			context.fillStyle = "rgba(0,0,0,0.6)";
			context.fillRect(0,0,metrics.scannerWidth, metrics.scannerHeight);
			
			context.lineWidth = metrics.lineWidth;
			context.strokeStyle = "green";
			
			cellWidth = Math.floor(metrics.scannerWidth / currentSector.width);
			cellHeight = Math.floor(metrics.scannerHeight / currentSector.height);
			
			x = cellWidth + metrics.lineWidth/2;
			for (index = 0; index < currentSector.width-1; index++)
			{
				//context.moveTo(x, 0);
				context.dashedLineTo(x, 0, x, metrics.scannerHeight);
				x += cellWidth;
			}
			
			y = cellHeight + metrics.lineWidth/2;
			for (index = 0; index < currentSector.height-1; index++)
			{
				context.dashedLineTo(0, y, metrics.scannerWidth, y);
				y += cellHeight;
			}
			
			context.stroke();
			
			context.strokeStyle = "white";
			context.strokeRect(metrics.lineWidth/2, metrics.lineWidth/2, metrics.scannerWidth-metrics.lineWidth, metrics.scannerHeight-metrics.lineWidth);		
		}
	};
});
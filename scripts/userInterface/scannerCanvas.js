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
		
		render: function(currentQuadrant) {
			var context;
			var canvas;
		
			
			canvas = getCanvas();
			context = getContext();
			
			context.fillStyle = "rgba(0,0,0,0.6)";
			context.fillRect(0,0,metrics.scannerWidth, metrics.scannerHeight);
			context.strokeStyle = "white";
			context.lineWidth = metrics.lineWidth;
			context.strokeRect(0.5, 0.5, metrics.scannerWidth-metrics.lineWidth, metrics.scannerHeight-metrics.lineWidth);		
		}
	};
});
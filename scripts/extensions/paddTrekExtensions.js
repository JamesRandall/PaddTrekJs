// Padd Trek specific extensions
define(function() {
	return function() {
		CanvasRenderingContext2D.prototype.drawPanel = function (x, y, width, height) {
			this.fillStyle = "rgba(0,0,0,0.6)";
			this.fillRect(x, y, width, height);
		
			this.strokeStyle = "white";
			this.strokeRect(
				x + this.lineWidth/2,
				y + this.lineWidth/2,
				x + width - this.lineWidth,
				y + height - this.lineWidth);
		}
	};
});
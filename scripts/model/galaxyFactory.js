define(["model/quadrantFactory"], function(quadrantFactory) {	
	return function() {
		var quadrants;
		var index;
		var galaxyWidth;
		var galaxyHeight;
		
		galaxyWidth = 8;
		galaxyHeight = 8;
		quadrants = [];
		for (index = 0; index < galaxyWidth * galaxyHeight; index += 1)
		{
			quadrants.push(quadrantFactory());
		}
		
		return {
			width: galaxyWidth,
			height: galaxyHeight,
			getQuadrant: function(x, y) {
				return quadrants[y * galaxyWidth + x];
			}	
		};
	};
});
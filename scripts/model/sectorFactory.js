define(function() {
	return function()
	{
		var sectors;
		var index;
		var sectorWidth = 8;
		var sectorHeight = 8;
		
		sectors = [];
		for (index = 0; index < sectorWidth * sectorHeight; index += 1)
		{
			var sector = {
				stars: [ ]
			};
			
			sectors.push(sector);
		}
		
		return {
			width: sectorWidth,
			height: sectorHeight,
			getSector: function(x, y) {
				return sectors[y * width + x];
			},
			units: []
		};
	}	
});
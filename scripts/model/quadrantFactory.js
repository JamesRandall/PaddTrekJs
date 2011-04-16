define(function() {
	function Sector()
	{
		return {
			stars: [ ]
		};
	}
	
	return function()
	{
		var sectors;
		var index;
		var sectorWidth = 8;
		var sectorHeight = 8;
		
		sectors = [];
		for (index = 0; index < sectorWidth * sectorHeight; index += 1)
		{
			var sector = new Sector();
			
			sectors.push(sector);
		}
		
		return {
			width: sectorWidth,
			height: sectorHeight,
			getSector: function(x, y) {
				if (x >= this.width || y >= this.height || x < 0 || y < 0)
				{
					throw new Error("getSector coordinates out of range");
				}
				return sectors[y * this.width + x];
			},
			units: []
		};
	}	
});
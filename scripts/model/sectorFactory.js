define(function() {
	return function()
	{
		var quadrants;
		var index;
		
		sectors = [];
		for (index = 0; index < 8 * 8; index += 1)
		{
			var sector = {
				stars: [ ]
			};
			
			sectors.push(sector);
		}
		
		return {
			getSector: function(x, y) {
				return quadrants[y * width + x];
			}
		};
	}	
});
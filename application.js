function _userInterfaceBuilder()
{
	return {
		buildMainScreen: function() {
			var gameUi = $('<div>').addClass("game").append(this.buildScanner());
			gameUi.appendTo($("#paddTrekContainer"));
			return gameUi;
		},
		
		buildScanner: function() {
			var table = $('<table>');
			for(row=0; row < 8; row++)
			{
				var tr = $('<tr>');
				for(col=0; col < 8; col++)
				{
					tr.append($('<td>').addClass("scannerCell"));
				}
				tr.appendTo(table);
			}
			return table;
		}
	};
}

function _buildGalaxy()
{
	var quadrants = [];
	var galaxyWidth = 8;
	var galaxyHeight = 8;
	
	return {
		getQuadrant: function(x, y) {
			return quadrants[y * galaxyWidth + x];
		}
	}
}

var application = {
	init: function() {
		this.userInterface.builder.buildMainScreen();	
	},
	userInterface: {
		builder: _userInterfaceBuilder()
	},
	galaxy: _buildGalaxy(),
	rules: _rules();
};

$(document).ready(function() {
	application.init();
});
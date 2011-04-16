define(["jquery", "metrics"], function($, metrics) {
	function buildPanel(name, left, top, width, height) {
		var div = $('<div id="' + name + '">')
			.css("position", "relative")
			.css("left", left)
			.css("top", top)
			.css("width", width)
			.css("height", height)
			.addClass("panel");
		return div;
	}
	
	function buildScanner() {
		var div = $('<div>')
			.css("position", "relative")
			.css("left", metrics.spacing)
			.css("top", metrics.spacing)
			.css("width", metrics.scannerWidth)
			.css("height", metrics.scannerHeight);
		var canvas = $('<canvas id="scannerCanvas" width="' + metrics.scannerWidth + '" height="' + metrics.scannerHeight + '">');
		div.append(canvas);
		return div;
	};
	
	function buildEnergyPanel() {
		return buildPanel('energyPanel',
					      metrics.spacing + metrics.scannerWidth + metrics.spacing,
					      -metrics.scannerHeight + metrics.spacing,
					      metrics.energyPanelWidth,
					      metrics.energyPanelHeight);
	};
	
	function buildShieldsPanel() {
		return buildPanel('shieldsPanel',
					      metrics.spacing + metrics.scannerWidth + metrics.spacing,
					      -metrics.scannerHeight + metrics.spacing * 2,
					      metrics.shieldsPanelWidth,
					      metrics.shieldsPanelHeight);
	}
	
	function buildWeaponsPanel() {
		return buildPanel('weaponsPanel',
					      metrics.spacing + metrics.scannerWidth + metrics.spacing,
					      -metrics.scannerHeight + metrics.spacing * 3,
					      metrics.weaponsPanelWidth,
					      metrics.weaponsPanelHeight);
	}
	
	return {
		buildMainScreen: function() {
			var gameUi = $('<div>').addClass("game");
			gameUi.append(buildScanner());
			gameUi.append(buildEnergyPanel());
			gameUi.append(buildShieldsPanel());
			gameUi.append(buildWeaponsPanel());
			gameUi.appendTo($("#paddTrekContainer"));
			return gameUi;
		}
	};
});
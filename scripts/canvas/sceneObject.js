define(function() {
	function SceneObject(px, py) {
		return {
			x: px,
			y: py,
			render: function(context) { this.renderSceneObject(context); },
			renderSceneObject: function(context) { }
		};
	}
	
	return {
		create: function(px,py) { return new SceneObject(px, py); }
	};
});
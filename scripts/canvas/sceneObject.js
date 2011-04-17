define(function() {
	function SceneObject(px, py, pw, ph) {
		return {
			x: px,
			y: py,
			width: pw,
			height: ph,
			sceneObjects: [ ],
			render: function(context) {
				var index;
				var sceneObject;
				
				this.renderSceneObject(context);
				for (index = 0; index < this.sceneObjects.length; index++)
				{
					sceneObject = this.sceneObjects[index];
					sceneObject.render(context);
				}
			},
			renderSceneObject: function(context) { },
			addSceneObject: function(sceneObject) { this.sceneObjects.push(sceneObject); }
		};
	}
	
	return {
		create: function(px,py,pw,ph) { return new SceneObject(px, py,pw,ph); }
	};
});
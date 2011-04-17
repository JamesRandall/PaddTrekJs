define(["jquery"], function($) {
	function getCanvas()
	{
		return $("#gameCanvas");
	}
	
	function SceneGraph(canvasElement)
	{
		var sceneObjects = [ ];
		var canvas = canvasElement;
		
		function getContext()
		{
			return canvas.getContext("2d");
		}
		
		return {
			clear: function() {
				canvas.width = canvas.width+1;
				canvas.width = canvas.width-1;
				return this;
			},

			addSceneObject: function(sceneObject) {
				sceneObjects.push(sceneObject);
				return this;
			},

			render: function() {
				var context;
				var sceneObjectIndex;
				var sceneObject;
				this.clear();
				
				context = getContext();

				for(sceneObjectIndex=0; sceneObjectIndex < sceneObjects.length; sceneObjectIndex++) {
					sceneObject = sceneObjects[sceneObjectIndex];
					context.save();
				    context.translate(sceneObject.x, sceneObject.y);
					sceneObject.render(context);
					context.restore();
				}

				return this;			
			}
		};
	}
	
	return {
		create: function(canvasElement) { return new SceneGraph(canvasElement); }
	};
});
define(["views/shortRangeView"], function(shortRangeView) {
	return{
		create: function(model) {
			return {
				sceneGraph: shortRangeView.create(model),
				activate: function() {
					this.sceneGraph.render();
				}
			};
		}
	}
});
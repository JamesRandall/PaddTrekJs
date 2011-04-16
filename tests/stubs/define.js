// Allows for the unit testing of RenderJS modules. Currently only works if a module returns a function.
var moduleFunction = null; // yuck yuck

function define() {
	moduleFunction = arguments[arguments.length-1];
}

function moduleLoaded() {
	return moduleFunction !== null;
}
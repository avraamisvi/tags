Tags = {
	root_path: "/",

	path_for: function(path) {
		return this.root_path + path;
	},

	path_template_for: function(component) {
		return this.path_for("lib/tags/" + component + "/template.html");
	}
}
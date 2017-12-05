var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

require('dotenv').config();

// Development server
gulp.task("dev", ["webpack-dev-server"]);

// Production build
gulp.task("build", ["webpack:build"]);

// Webpack
gulp.task("webpack:build", function(callback) {
	
	// Config webpack
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify(process.env.BUILD_TYPE_PRODUCTION)
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// Run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// Webpack dev server
gulp.task("webpack-dev-server", function(callback) {

	// Webpack config
	var myConfig = Object.create(webpackConfig);

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(process.env.DEV_SERVER_PORT, String(process.env.DEV_SERVER_HOST), function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://" + process.env.DEV_SERVER_HOST + ":" + process.env.DEV_SERVER_PORT + "/index.html");
	});
});
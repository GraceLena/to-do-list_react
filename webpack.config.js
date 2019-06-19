const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path:  path.join(__dirname + '/build'),
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
						// you can specify a publicPath here
						// by default it use publicPath in webpackOptions.output
						publicPath: '../'
						}
					},
					"css-loader"
				]
			}	
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: "build.css",
		//chunkFilename: "[id].css"
		}),
		new HtmlWebpackPlugin({
		template: "./src/index.html"
		})
	]

};
// the purpose of this config file
// without this config file ,we probably need to do something like, 
// "webpack ./entry.js bundle.js --module-bind 'css=style!css'" to build a js file
// now we have this config file, we can leave all the configuration here.
// and just run "webpack" only.
var webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill','./index.js'],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	plugins: [

	],
	module: {
		loaders: [
			{ test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname}, 
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file?name=public/fonts/[name].[ext]' }
		]
	}
};
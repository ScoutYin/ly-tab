const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const rootDir = process.cwd();

const devServerConfig = {
	port: 8081,
	historyApiFallback: true,
	static: {
		publicPath: '/',
	},
	client: {
		reconnect: 10
	},
	onListening(arg) {
		console.log()
		console.log(`You application is running here http://localhost:${devServerConfig.port}`)
	}
}

module.exports = {
	mode: 'development',
	entry: path.resolve(rootDir, 'example/main.js'),
	output: {
		// path: path.resolve(rootDir, 'dist'),
		// filename: 'ly-tab.js'
		path: path.resolve(rootDir, 'dist'),
		filename: '[name].bundle.js',
	},
	devServer: devServerConfig,
	stats: 'errors-only',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.vue', '.js', '...'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'example/index.html'
		}),
	]
};

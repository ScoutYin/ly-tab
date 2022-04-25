const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootDir = process.cwd();

const devServerConfig = {
	port: 8081,
	historyApiFallback: true,
	static: {
		publicPath: '/'
	},
	client: {
		// 重连次数
		reconnect: 10
	},
	onListening() {
		console.log();
		console.log(
			`You application is running here http://localhost:${devServerConfig.port}`
		);
	}
};

const commonConfig = {
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
				use: ['vue-style-loader', 'css-loader']
			}
		]
	},
	optimization: {
		minimize: false
	}
};

const devConfig = {
	mode: 'development',
	entry: path.resolve(rootDir, 'example/main.js'),
	output: {
		path: path.resolve(rootDir, 'dist'),
		filename: '[name].bundle.js'
	},
	devServer: devServerConfig,
	stats: 'errors-only',

	resolve: {
		extensions: ['.vue', '.js', '...'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'example/index.html'
		})
	]
};

const prodConfig = {
	mode: 'production',
	entry: path.resolve(rootDir, 'src/index.js'),
	output: {
		path: path.resolve(rootDir, 'lib'),
		filename: 'ly-tab.common.js',
		library: {
			type: 'commonjs'
		}
	},
	resolve: {
		extensions: ['.vue', '.js', '...']
	},
	plugins: [new VueLoaderPlugin()]
};

module.exports = (env, args) => {
	if (args.mode === 'production') {
		return merge(commonConfig, prodConfig);
	} else {
		return merge(commonConfig, devConfig);
	}
};

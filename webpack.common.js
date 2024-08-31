const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { index: './src/index.js' },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Web stubs',
			template: './src/assets/index.html',
			favicon: './src/assets/favicon.ico',
			meta: {
				description:
					'A collection of web elements and pages useful to demo test automation capabilities and skills'
			}
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	}
};

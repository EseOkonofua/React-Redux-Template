var path = require('path');
var webpack = require('webpack');

var express = require('express');
var app = express();


const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(express.static(path.resolve('public')));
app.use(webpackDevMiddleware(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});



var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log("listening on port", PORT);
});

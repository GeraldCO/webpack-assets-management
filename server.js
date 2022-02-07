const express = require('express');
const webpack = require('webpack');
const webpackDevMiddlewere = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

    // Tell express to use the webpack-dev-middlewere and use the webpack.config.js
    // configuration files as a base.
app.use(
    webpackDevMiddlewere(compiler, {
        publicPath: config.output.publicPath,
    })
);

// Serve the files on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
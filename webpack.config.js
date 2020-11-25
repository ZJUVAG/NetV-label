const path = require('path');

module.exports = {
    entry: './netv-label.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'netv-label.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
};
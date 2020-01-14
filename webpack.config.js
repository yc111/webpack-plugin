const path = require('path');
const MyPlugin = require('./plugins/MyPlugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MyPlugin()
    ]
}
const path = require('path');
module.exports = {
    entry: { main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'session-6'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
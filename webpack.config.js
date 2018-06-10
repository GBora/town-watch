const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'townWatch.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
                {
                    test:/\.(s*)css$/,
                    use:['style-loader','css-loader', 'sass-loader']
                 }
         ]
   },
};

const path = require('path');

module.exports = {
    entry: './src/Main.js',
    mode: 'development',
    output: {
        library: 'townWatch',
        libraryTarget: 'umd',
        filename: 'townWatch.js',
        auxiliaryComment: 'MIT License',
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

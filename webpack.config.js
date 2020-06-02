const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output:{
    filename:'app.[contentHash].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-react','@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Webpack Paso a Paso',
      template:'src/index.html'
    })
  ]
}
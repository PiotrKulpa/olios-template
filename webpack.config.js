const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: './assets/js/index.js',
  entry: ['webpack/hot/dev-server' , './assets/js/index.js'],
  devServer: {
    contentBase: path.resolve('./'),
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true,
  },
  output: {
    path: path.resolve('./'),
    filename: 'index.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        use: 
      {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }

      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
            },
          },
         ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ]
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./style.css",
      chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
      // $: 'jquery',
      // jQuery: 'jquery',
    })
  ]
};

// require("core-js/stable");
require("@babel/polyfill");
// import "@babel/polyfill";
// require("regenerator-runtime/runtime");
const  path = require('path')
const  nodeExternals =require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
// import  path from 'path'
// import   nodeExternals from 'webpack-node-externals'


module.exports = { 
  entry: ['@babel/polyfill','./server/index.js'],

  target: 'node',
  plugins: [
    new NodemonPlugin()
  ],
  externals: [nodeExternals(
    {
      script: './server-build/index.js',

      // What to watch.
      watch: path.resolve('./server-build'),
      ext: 'js,json',
    }
  )],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  
};
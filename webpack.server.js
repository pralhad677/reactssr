// require("core-js/stable");
require("@babel/polyfill");
// import "@babel/polyfill";
// require("regenerator-runtime/runtime");
const  path = require('path')
const  nodeExternals =require('webpack-node-externals')
// import  path from 'path'
// import   nodeExternals from 'webpack-node-externals'


module.exports = { 
  entry: ['@babel/polyfill','./server/index.js'],

  target: 'node',

  externals: [nodeExternals()],

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
  }
};
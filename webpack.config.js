'use strict';

module.exports = {
  entry: {
  	newtab: './src/newtab.js'
  },
  output: {
	  path: __dirname + '/dist',
	  filename: '[name].bundle.js'
  }
}

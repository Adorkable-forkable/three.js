'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/three.min.js');
} else {
  module.exports = require('./build/three.js');
}

global.path = require('path');
global.fs = require('fs');
global.conf = require('../conf');
global.classTools = function(m){
  return require(m);
}
require('./js/DoApi2Type');
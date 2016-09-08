var path = require('path');
// console.log(path);
var rootPath = path.normalize(__dirname + '/../../');
console.log(rootPath + "\src\\views");

module.exports = {
  development: {
    rootPath: rootPath,
    description: 'Development Configuration',
    db: 'mongodb://localhost/logozoneDb',
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    description:'Production Configuration',
    db:'mongodb://OIstrate:logozoneadmin@ds145395.mlab.com:45395/logozonedb',
    port: process.env.PORT || 80
  }
}

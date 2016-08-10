var path = require('path');
// console.log(path);
var rootPath = path.normalize(__dirname + '../../../');
console.log(rootPath);

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/logozoneDb',
    port: process.env.PORT || 5000
  },
  production: {
    rootPath: rootPath,
    db:'mongodb://OIstrate:logozoneadmin@ds145395.mlab.com:45395/logozonedb',
    port: process.env.PORT || 3030
  }
}

var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  /*var a=path.join.apply(path, [_root].concat(args));
  console.log("你好"+a);*/
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;

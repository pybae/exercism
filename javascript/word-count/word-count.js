var word_count = function(str) {
  var a = str.trim().split(/\s+/);
  var map = {};
  for (var i = 0, l = a.length; i < l; i ++) {
    map[a[i]] = (map[a[i]] || 0) + 1;
  }
  return map;
}

module.exports = word_count;

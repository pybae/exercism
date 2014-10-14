var compute = function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  var count = 0;
  for (var i = 0, l = a.length; i < l; i ++) {
      if (a[i] != b[i]) {
        count++;
      }
  }
  return count;
}

module.exports.compute = compute;

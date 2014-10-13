// Bob file

var Bob = function() {
  this.hey = function(str) {
    if (str.length === 0 || /^\s*$/.test(str))
      return "Fine. Be that way!";
    if (str.match(/[a-zA-Z]/g) && str === str.toUpperCase())
      return "Whoa, chill out!";
    if (str.slice(-1) === '?')
      return "Sure.";
    return "Whatever.";
  }
}

module.exports = Bob;

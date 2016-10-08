function KVP_System(Protected){
  // Generate KVP System via modular pattern (to protect the data)
  var tempObj = (function() {
    var data = {};
    var set = function(key, value) {
      data[key] = value;
    }
    var get = function(key) {
      if (data[key]) {
        return data[key];
      } else {
        return null;
      }
    }
    var remove = function(key) {
      delete data[key];
    }
    var has = function(key) {
      if (data[key]) {
        return true;
      } else {
        return false;
      }
    }
    var clear = function() {
      data = {};
    }
    var Length = function() {
      return Object.keys(data).length;
    }
    if (!Protected) {
      var all = function() {
        var d = data;
        return d;
      }
    }
    if (Protected) {
      return {
        set: set,
        get: get,
        remove: remove,
        has: has,
        Length: Length,
        clear: clear
      }
    } else {
      return {
        set: set,
        get: get,
        remove: remove,
        has: has,
        Length: Length,
        all: all,
        clear: clear
      }
    }
  })();
  //Load properties into the object being constructed
  for (var prop in tempObj) {
    this[prop] = tempObj[prop];
  }
}

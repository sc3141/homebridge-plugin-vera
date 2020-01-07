module.exports = {
  get: function(val) {
    return val ? true : false;
  },

  set: function(val) {
    return val ? 1 : 0;
  }
};
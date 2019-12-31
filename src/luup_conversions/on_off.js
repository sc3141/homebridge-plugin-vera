module.exports = {
  get: function(val) {
    return (!!val) ? 'on' : 'off';
  },

  set: function(val) {
    return val == 'on' ? 1 : 0;
  }
};
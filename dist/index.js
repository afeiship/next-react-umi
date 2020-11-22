/*!
 * name: @jswork/next-react-umi
 * description: For umi application.
 * homepage: https://github.com/afeiship/next-react-umi
 * version: 1.0.0
 * date: 2020-11-22 15:29:26
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var EventMitt = global.EventMitt || require('@jswork/event-mitt');
  var DEFAULT_OPTIONS = { key: 'umiapp' };

  var NxReactUmi = nx.declare('nx.ReactUmi', {
    statics: {
      bootstrap: function (inApp, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var app = nx.mix(inApp, EventMitt);
        var key = options.key;
        // deletes
        delete options.key;
        global[key] = nx.mix({ $app: app }, options);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactUmi;
  }
})();

(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxReactUmi = require('../src/next-react-umi');

  describe('NxReactUmi.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();

var HomeModel = require('../src/scripts/models/home-model');
describe('src/scripts/core - Models Tests', function() {

    it('should match Home title', function() {
        var model = new HomeModel();
        expect(model.title).toEqual('Home');
    });

});
var HomeModel = require('../src/scripts/models/home-model');

describe('src/scripts/core - Controller Tests', function() {

    it('App should be defined ', function() {
        expect(app).toBeDefined();
    });

    it('should navigate to home page', function() {
        var model = new HomeModel();
        app.controller.navigate('/');
        expect(app.controller.current.model.title).toEqual(model.title);
    });

});
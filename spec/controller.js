var HomeModel = require('../src/scripts/models/home-model');
var AboutModel = require('../src/scripts/models/about-model');
var ContactModel = require('../src/scripts/models/contact-model');
var NotFoundModel = require('../src/scripts/models/notfound-model');


describe('src/scripts/core - Controller Tests', function() {

    it('App should be defined ', function() {
        expect(app).toBeDefined();
    });

    it('should navigate to home page', function() {
        app.controller.navigate('/');
        var model = new HomeModel();
        expect(app.controller.current.model.title).toEqual(model.title);
    });

    it('should navigate to about page', function() {
        app.controller.navigate('/about');
        var model = new AboutModel();
        expect(app.controller.current.model.title).toEqual(model.title);
    });

    it('should navigate to contact page', function() {
        app.controller.navigate('/contact');
        var model = new ContactModel();
        expect(app.controller.current.model.title).toEqual(model.title);
    });
    it('should navigate to not found page', function() {
        app.controller.navigate('/---');
        var model = new NotFoundModel();
        expect(app.controller.current.model.title).toEqual(model.title);
    });
    it('should throw exeption', function() {
        expect(function() {
            app.controller.navigate();
        }).toThrow();
    });
    it('should have no content - controller.exit', function() {
        app.controller.navigate('/');
        app.controller.empty();
        var contentChildren = app.controller.content.find('div').length;
        expect(contentChildren).toEqual(0);
    });
    it('should have a H6 as content - controller.add(html) ', function() {
        app.controller.navigate('/');
        app.controller.add('<h6>Hello</h6>');
        var contentChildren = app.controller.content.find('h6').length;
        expect(contentChildren).toEqual(1);
    });

    it('should have called animateInComplete after navigate ', function(done) {
        spyOn(app.controller, 'animateInComplete');
        app.controller.navigate('/contact');
        var timeout = setTimeout(function() {
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
    });

});
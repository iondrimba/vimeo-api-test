describe('src/scripts/core - Controller Tests', function() {

    it('App should be defined ', function() {
        expect(app).toBeDefined();
    });

    it('should be page home ', function() {
        app.controller.navigate('/');
        expect(app.controller.current.model.title).toEqual('Home');
    });

    it('should be page about ', function() {
        app.controller.navigate('/about');
        expect(app.controller.current.model.title).toEqual('About');
    });

    it('should be page contact ', function() {
        app.controller.navigate('/contact');
        expect(app.controller.current.model.title).toEqual('Contact');
    });
    it('should be page not found ', function() {
        app.controller.navigate('/---');
        expect(app.controller.current.model.title).toEqual('Oops!');
    });
    it('should be throw exeption', function() {
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
            done();
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
        }, 1000);
    });

});
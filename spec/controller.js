describe('.find() Test', function() {

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
});

;
(function() {

    var router = require('./router'),
        home = require('./views/home'),
        sobre = require('./views/sobre'),
        contato = require('./views/contato'),
        menu = require('./components/menu'),
        $$ = require('../../node_modules/nojquery/nojquery'),
        mapViewsPath = [];

    function App() {
        console.log('App');

        this.menu = new menu($$);
        this.menu.on('click', onMenuClick);
        this.menu.init();

        this.currentView = null;
        this.pastView = null;

        //MAP VIEWS
        mapViewsPath['/'] = home;
        mapViewsPath['/sobre'] = sobre;
        mapViewsPath['/contato'] = contato;


        //ROUTER
        this.router = new router();
        this.router.on('change', onRouterChanged);
        this.router.start();

        //ROUTE CHANGED
        function onRouterChanged(context) {
            console.log('App onRouterChanged', context.path, this);

            if (this.pastView) {
                this.pastView.dispose();
            }
            this.currentView = new mapViewsPath[context.path]();
            this.currentView.init();
        };

        function onMenuClick(path) {
        	console.log('App menu click', path);
        };
    };

    window.app = App();

}());
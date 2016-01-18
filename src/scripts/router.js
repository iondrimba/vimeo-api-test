var page = require('../../node_modules/page/page.js');

function Router() {
    this.events = [];
    console.log('Router');
};

Router.prototype.start = function() {
	console.log('Router start');
    page('/', this.routerChanged.bind(this));
    page();
};

Router.prototype.on = function(event, callback) {
	console.log('Router on');
    this.events[event] = callback;    
};
Router.prototype.routerChanged = function() {
    console.log('Router routerChanged');
    this.events['change'](arguments[0]);
};


module.exports = Router;
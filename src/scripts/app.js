var Router = require('../../node_modules/page/page');
var $ = require('../../node_modules/jquery/dist/jquery');
var handlebars = require('handlebars');
var Controller = require('./core/controller');

function App() {
	this.$ = $;
	this.router = Router;
	this.handlebars = handlebars;
	this.controller = new Controller(this);
	this.controller.start();
};

window.app = new App();
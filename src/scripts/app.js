var $ = require('../../node_modules/jquery/dist/jquery');
var handlebars = require('handlebars');
var Home = require('./views/home.js');

function App() {
	this.$ = $;
	this.handlebars = handlebars;
	this.home = new Home(this);

	$('body').html(this.home.view());
	this.home.render();
};

window.app = new App();
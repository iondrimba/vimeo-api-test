var template = require('../../../src/templates/home.html');
var Model = require('../models/home-model');
var Home = function Home(app) {
    'use strict'
    var button = null;
    this.model = new Model();
    this.view = function() {
        var view = app.handlebars.compile(template);
        view = view(this.model);
        return view;
    };
    this.title = function() {
        return this.model.title;
    };
    this.render = function() {
        button = app.$('.home').find('button');
        button.on('click', this.click.bind(this));
    };
    this.click = function() {
        alert('home');
    };
    this.destroy = function() {
        button.off('click');
        button = null;
    };
    this.animateIn = function(complete) {
        app.controller.content.addClass('content-show');
        var timeout = setTimeout(function() {
            clearTimeout(timeout);
            complete();
        }, 500);
    };
};


module.exports = Home;
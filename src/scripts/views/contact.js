var template = require('../../../src/templates/contact.html');
var Model = require('../models/contact-model');
var Contact = function Contact(app) {
    'use strict'
    this.model = new Model();
    this.view = function() {
        var view = app.handlebars.compile(template);
        view = view(this.model);
        return view;
    };
    this.title = function() {
        return this.model.title;
    };
    this.render = function() {};
    this.destroy = function() {};
    this.animateIn = function(complete) {
        app.controller.content.addClass('content-show');
        var timeout = setTimeout(function() {
            clearTimeout(timeout);
            complete();
        }, 500);
    };
};


module.exports = Contact;
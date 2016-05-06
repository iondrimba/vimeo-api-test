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

        var player = app.$('iframe');
        var playerOrigin = '*';

        // Listen for messages from the player
        if (window.addEventListener) {
            window.addEventListener('message', onMessageReceived, false);
        }
        else {
            window.attachEvent('onmessage', onMessageReceived, false);
        }

        function post(action, value) {
            var data = {
                  method: action
              };

              if (value) {
                data.value = value;
            }

            var message = JSON.stringify(data);
            player[0].contentWindow.postMessage(message, playerOrigin);
        }

        function onMessageReceived(event) {
            // Handle messages from the vimeo player only
            if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
                return false;
            }

            if (playerOrigin === '*') {
                playerOrigin = event.origin;
            }

            var data = JSON.parse(event.data);
            switch (data.event) {
                case 'ready':
                post('addEventListener', 'finish');
                post('addEventListener', 'playProgress');
                break;

                case 'playProgress':
                onPlayProgress(data.data);
                break;

                case 'finish':
                console.log('finish');
                break;
            }
        }

        function onPlayProgress(data) {
            var seconds = parseInt(data.seconds.toString().replace(/\D/,''),10);
            console.log(seconds);
            if(seconds>3000) {
                app.$('.cn-video-nome').addClass('cn-video-nome-show');
            }
        }
    };
    this.destroy = function() {
    };
    this.animateIn = function(complete) {
        app.controller.content.addClass('content-show');
        var timeout = setTimeout(function() {
            clearTimeout(timeout);
            return complete();
        }, 500);
    };
};


module.exports = Home;
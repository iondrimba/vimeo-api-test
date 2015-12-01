# Browserify + Gulp Project Template

### Installation

```sh
$ git clone https://github.com/iondrimba/Browserify-Gulp-Sample.git
$ cd Browserify-Gulp-Sample
$ npm install
```

__Includes:__
  * LiveReload
  * CommonJS
  * Javascript
  * Javascript ES6
  * CoffeeScript
  * CSS
  * Stylus
  * HTML
  * Jade
  * React/JSX
  * Sprite generation
  * Image optimization

__Structure:__

````bash
nakedapp
├── README.md
├── package.json
├── .gitignore
├── Makefile
├── LICENSE
├── public
│    ├─── images
│    │    └── icons.png
│    ├─── app.js
│    ├─── index.html
│    └─── app.css
│── src
│    ├── images
│    │   └── icons
│    ├── scripts
│    │   ├── models
│    │   ├── shared
│    │   │   ├── comp
│    │   │   └── lib
│    │   ├── views
│    │   └── app.js
│    ├── styles
│    │   ├── shared
│    │   │   └── comp
│    │   └── views
│    └── templates
│        ├── comp
│        └── views
└── build
    ├── tasks
    │   ├── browserify.js
    │   ├── build.js
    │   ├── clean.js
    │   ├── images.js
    │   ├── server.js
    │   ├── sprites.js
    │   ├── styles.js
    │   └── watch.js
    ├── config.json
    └── gulpfile.json
````

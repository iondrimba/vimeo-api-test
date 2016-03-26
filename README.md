# SPA Template 
Simple ready to go SPA template. No MV* framework dependency.

[![Travis build status](https://travis-ci.org/iondrimba/spatemplate.svg?branch=master)](https://travis-ci.org/iondrimba/spatemplate) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/spatemplate/branch/master) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/spatemplate/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/spatemplate?branch=master)

### Installation

```sh
$ git clone https://github.com/iondrimba/spatemplate.git
$ cd spatemplate
$ npm install

$ gulp
```
### [Live demo]

__TODO:__

* Write more tests

__Features:__

* Tests (Jasmine + Karma)
* SemVer (Automated versioning file names with Semantic Versioning)
* Coverage (Coveralls)
* Router system with pushstate (page.js)
* Templating engine (handlebars.js)
* Module system CommonJs (browserify)

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

__Testing:__

 * npm test

__Includes:__

* BrowserSync
* Browserify 
* Karma (test runner)
* Jasmine (test library)
* Sass
* SemVer
* ESLint
* Scss Lint (Requires Ruby and [scss-lint])
* Imagemin (images optimization)
* Uglify
* Watch
* Html-Min
* Post-Css (autoprefixer)

__Gulp Tasks:__

* gulp (default)
* gulp deploy
* gulp travis
* gulp bump-patch / minor / major (update files with version number)

__Semantic Versioning:__

The bump-versions tasks should be executed after your deploy and optimize task.
The task will:

1. Rename the file app.js to app.version.js
2. Rename the file app.css to app.version.css
3. Will update the index.html with the new file references.

__Structure:__

````bash
├── public/
│    ├─── js/ 
│    ├─── css/ 
│    ├─── images/
│    ├─── .htaccess
│    └─── index.html
│── spec/(jasmine tests)
│── src/
│    ├── scripts/
│    └── scss/
│    └── templates/
│── tasks/
│
│── .gitignore
│── .travis.yml
│── gulpfile.js
│── karma.conf.js
│── lint.yml
│── package.json
└── README.md
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/spatemplate/>

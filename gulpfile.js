'use strict';
var gulp = require('gulp');

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js scss files
gulp.task('watch', require('./tasks/watch.js'));

//local server localhost:8000
gulp.task('server', require('./tasks/webserver.js'));

// Default Task
gulp.task('default', ['server', 'watch', 'browserify']);

gulp.task('travis', ['browserify', 'lint', 'scsslint', 'sass', 'uglify']);
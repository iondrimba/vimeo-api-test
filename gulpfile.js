'use strict';

var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var gulp = require('gulp');
var server = require('gulp-webserver');

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./src/scripts/app.js').bundle()
 
  bundleStream
    .pipe(source('app.js'))    
    .pipe(gulp.dest('./public/scripts/'))
});

gulp.task('watch', function () {
   gulp.watch('./src/scripts/**/*.js', ['browserify']);
});

//local server localhost:8000
gulp.task('server', function() {
  gulp.src('./public')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Default Task
gulp.task('default', ['watch', 'browserify', 'server']);


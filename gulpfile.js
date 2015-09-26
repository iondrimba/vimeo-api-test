'use strict';

var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulp = require('gulp');

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./src/scripts/app.js').bundle()
 
  bundleStream
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))    
    .pipe(gulp.dest('./build/scripts/'))
})

// Default Task
gulp.task('default', ['browserify']);
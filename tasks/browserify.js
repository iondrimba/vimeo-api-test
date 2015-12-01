var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');

module.exports =function() {
  var bundleStream = browserify('./src/scripts/app.js').bundle()
 
  bundleStream
    .pipe(source('app.js'))    
    .pipe(gulp.dest('./public/scripts/'))
};
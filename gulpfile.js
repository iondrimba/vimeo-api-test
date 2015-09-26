'use strict';

var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var server = require('gulp-webserver');

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./src/scripts/app.js').bundle()
 
  bundleStream
    .pipe(source('app.js'))    
    .pipe(gulp.dest('./public/scripts/'))
});

//eslint task
gulp.task('lint', function () {
    return gulp.src(['./src/scripts/**/*.js'])
        .pipe(eslint({
          'globals': {
            'jQuery':false,
            '$':true
          },
          'env': {
            'browser': true,
            'node': true
          },
          'rules': {
              'eqeqeq': 1,
              'curly': 2,
              'quotes': [2, 'single']
          }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

//sass - scss task
gulp.task('sass', function () {
  gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/'));
});

//watch js scss files
gulp.task('watch', function () {
   gulp.watch('./src/scripts/**/*.js', ['lint','browserify']),
   gulp.watch('./src/styles/**/*.scss', ['sass']);
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
gulp.task('default', ['server', 'watch', 'browserify']);


'use strict';
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var bump = require('gulp-bump');
var semver = require('semver');
var pckg = require('./package.json');


var patch = semver.inc(pckg.version, 'patch');
var minor = semver.inc(pckg.version, 'minor');
var major = semver.inc(pckg.version, 'major');

// bump versions on package
gulp.task('minor', function () {

  return gulp.src(['./package.json'])
    .pipe(bump({
      version: minor
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('patch', function () {

  return gulp.src(['./package.json'])
    .pipe(bump({
      version: patch
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('major', function () {

  return gulp.src(['./package.json'])
    .pipe(bump({
      version: major
    }))
    .pipe(gulp.dest('./'));
});

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//html min 
gulp.task('html-min', require('./tasks/html-min.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//coveralls
gulp.task('coveralls', require('./tasks/coveralls.js'));

// Default Task
gulp.task('default', ['scsslint', 'sass', 'lint', 'browserify', 'browser-sync', 'watch']);

gulp.task('deploy', ['scsslint', 'sass', 'lint', 'browserify', 'html-min', 'uglify', 'imagemin']);

// bump package versions
gulp.task('bump-patch', ['deploy', 'patch']);
gulp.task('bump-minor', ['deploy', 'minor']);
gulp.task('bump-major', ['deploy', 'major']);


//CI
gulp.task('travis', ['scsslint', 'sass', 'lint', 'browserify', 'coveralls', 'imagemin', 'html-min', 'uglify']);
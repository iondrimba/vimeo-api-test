var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
    gulp.watch('./src/scripts/**/*.js', ['lint',  'browserify']),
        gulp.watch('./src/styles/**/*.scss', ['sass','scsslint']);
};
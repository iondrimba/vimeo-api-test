var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function() {
  return gulp.src('public/src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/src/scripts'));
};
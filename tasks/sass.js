var gulp = require('gulp');
var sass = require('gulp-sass')

module.exports =function () {
  gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
};
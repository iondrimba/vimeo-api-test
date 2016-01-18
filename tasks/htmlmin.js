var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

module.exports = function() {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('public/'))
};
var gulp = require('gulp');
var server = require('gulp-webserver');

module.exports = function() {
    gulp.src('./public')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }));
};
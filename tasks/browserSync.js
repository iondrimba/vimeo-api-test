var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
    return gulp.task('browser-sync', function() {

        browserSync.init({
            server: './public'
        });

        gulp.watch('public/css/*.css').on('change', browserSync.reload);
        gulp.watch('public/js/*.js').on('change', browserSync.reload);
        gulp.watch('public/*.html').on('change', browserSync.reload);
    });
};
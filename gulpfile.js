'use strict';
var gulp = require('gulp');

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//minify JS task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//minify html task
gulp.task('htmlmin', require('./tasks/htmlmin.js'));

//watch js scss files
gulp.task('watch', require('./tasks/watch.js'));

//local server 
gulp.task('browser-sync', require('./tasks/browserSync.js'));

// Default Task
gulp.task('default', ['lint', 'sass', 'scsslint',  'htmlmin', 'browserify', 'watch', 'browser-sync']);

gulp.task('travis', ['browserify', 'lint', 'scsslint', 'sass', 'imagemin', 'uglify']);
var gulp = require('gulp');
var fs = require('fs');

module.exports = function () {
	gulp.src('./src/scripts/app.js')
		.pipe(gulp.dest('./public/js'));

	gulp.src('./src/scss/app.css')
		.pipe(gulp.dest('./public/css'));

	return gulp.src('./src/templates/index.html')
		.pipe(gulp.dest('./public/'));
};
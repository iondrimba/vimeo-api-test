var gulp = require('gulp');
var fs = require('fs');

module.exports = function () {
	fs.unlink('./public/index.html');
	gulp.src('./src/templates/index.html')
		.pipe(gulp.dest('./public/'));
};
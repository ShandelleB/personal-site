const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

gulp.task('styles', function() {
	gulp.src('css/*.css')
		.pipe(concatCss('bundle.css'))
		.pipe(cleanCss())
		.pipe(rename({ suffix: '.min'}))
		.pipe(gulp.dest('./'))
});

gulp.task('styles:watch', function() {
	gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', function() {
	
});
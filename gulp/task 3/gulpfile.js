const gulp = require('gulp'); 
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function() {
	return gulp.src('./app/scss/main.scss')
		.pipe( sourcemaps.init() )
		.pipe(sass())
		.pipe( autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./app/css/') )
});

gulp.task('watch', function() {
	watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel( browserSync.reload ));

	watch('./app/scss/**/*.scss', function(){
		setTimeout( gulp.parallel('scss'), 1000 )
	})

});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./app/"
		}
	})
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));
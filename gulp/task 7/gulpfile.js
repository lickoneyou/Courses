const gulp = require('gulp'); 
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const fileinclude = require('gulp-file-include');

gulp.task('html', function () {
	return gulp.src('./src/html/*.html')
	.pipe(fileinclude({prefix: '@@'}))
	.pipe(gulp.dest('./build/'))
	.pipe(browserSync.stream())
})


gulp.task('scss', function() {
	return gulp.src('./src/scss/main.scss')
		.pipe( sourcemaps.init() )
		.pipe(sass())
		.pipe( autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./build/css/') )
		.pipe(browserSync.stream())
});

gulp.task('copy:img', function () {
	return gulp.src('./src/images/**/*.*')
	.pipe(gulp.dest('./build/images/'))
})

gulp.task('copy:upload', function () {
	return gulp.src('./src/upload/**/*.*')
	.pipe(gulp.dest('./build/upload/'))
})

gulp.task('copy:js', function () {
	return gulp.src('./src/js/**/*.*')
	.pipe(gulp.dest('./build/js/'))
	.pipe(browserSync.stream())
})

gulp.task('watch', function() {
	watch(['./build/images/**/*.*', './build/upload/**/*.*'], gulp.parallel( browserSync.reload ));

	watch('./src/scss/**/*.scss', function(){
		setTimeout( gulp.parallel('scss'), 1000 )
	})

	watch('./src/html/**/*.html', gulp.parallel('html'))

	watch('./src/images/**/*.*', gulp.parallel('copy:img'))
	watch('./src/upload/**/*.*', gulp.parallel('copy:upload'))
	watch('./src/js/**/*.*', gulp.parallel('copy:js'))
});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	})
});


gulp.task('clean:build', async function () {
	let res = await import('del')
		return res.deleteSync(['./build'])
	})


gulp.task('default', gulp.series(gulp.parallel('clean:build'),gulp.parallel('scss', 'html', 'copy:img', 'copy:upload', 'copy:js') , gulp.parallel('server', 'watch')))
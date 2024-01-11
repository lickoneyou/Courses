const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const watch = require('gulp-watch')

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('watch', function () {
    watch(['./app/**/*.html', './app/**/*.css', './app/**/*.scss'], gulp.parallel(browserSync.reload))
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))
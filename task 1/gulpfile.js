const gulp = require('gulp')

gulp.task('hello', function(callback) {
    console.log('Hello Gulp')
    callback()
})

gulp.task('one', function(callback) {
    console.log('work one');
    callback()
});

gulp.task('two', function(callback) {
    console.log('work two');
    callback()
});

gulp.task('three', function(callback) {
    console.log('work three');
    callback()
});

gulp.task('series', gulp.series('one', 'two'))

gulp.task('parallel', gulp.parallel('one', 'two', 'three'))

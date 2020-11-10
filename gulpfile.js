const concat = require('gulp-concat');
const gulp = require('gulp');
const terser = require('gulp-terser-js');

gulp.task('default', function(done) {
  gulp.src(__dirname + '/src/**/*.js')
    .pipe(terser())
    .pipe(concat('index.js'))
    .pipe(gulp.dest(__dirname + '/dist/'))
  done();
});

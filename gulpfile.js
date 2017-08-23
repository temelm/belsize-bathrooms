var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('clean', function () {
  del(['./dist']);
});

gulp.task('css', function () {
  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './src/css/styles.css'])
    .pipe(cleanCSS({}))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist'));

  gulp.src('./src/js/index.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('php', function () {
  gulp.src('./src/php/mail.php')
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
  gulp.src('./node_modules/bootstrap/fonts/*')
    .pipe(gulp.dest('./fonts'));
});

gulp.task('build', ['clean', 'css', 'js', 'php', 'fonts']);
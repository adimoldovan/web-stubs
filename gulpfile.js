var gulp = require('gulp');

gulp.task('default', function () {
  var fonts = gulp.src([
    'node_modules/@fortawesome/fontawesome-free/webfonts/*'
  ])
    .pipe(gulp.dest('./assets/fs/webfonts'));

  var bs = gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ])
    .pipe(gulp.dest('./assets/bootstrap'));

  var fs = gulp.src([
    'node_modules/@fortawesome/fontawesome-free/css/all.css',
    'node_modules/@fortawesome/fontawesome-free/js/all.js'
  ])
    .pipe(gulp.dest('./assets/fs'));

  var jquery = gulp.src([
    'node_modules/jquery/dist/jquery.js',
  ])
    .pipe(gulp.dest('./assets/jquery'));

  var jquery_ui = gulp.src([
    'node_modules/jquery-ui/themes/base/*.css'
  ])
    .pipe(gulp.dest('./assets/jquery-ui'));

  return [fonts, bs, fs, jquery, jquery_ui];
});
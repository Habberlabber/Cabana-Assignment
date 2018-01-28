/*
|--------------------------------------------------------------------------
| GULP SCRIPT TASKS
|--------------------------------------------------------------------------
|
| This file contains the Gulp tasks related to scripts
|
*/

const gulp = require('gulp');
const conf = require('../gulpconfig');

// Moves vendor and custom scripts to the destination
gulp.task('scripts', ['scripts:vendor', 'scripts:custom']);

// Moves npm dependencie and custom vendor scripts to the vender script destination location
gulp.task('scripts:custom', function() {
  gulp.src(conf.path.src.scripts.base + '/*.js')
    .pipe(gulp.dest(conf.path.dest.scripts.base));
});

// Moves npm dependencie and custom vendor scripts to the vender script destination location
gulp.task('scripts:vendor', ['scripts:bootstrap', 'scripts:custom:vendor', 'scripts:validation']);

// Moves custom vendor scripts to the vender script location
gulp.task('scripts:custom:vendor', function() {
  gulp.src(conf.path.src.scripts.vendor + '/*.js')
    .pipe(gulp.dest(conf.path.dest.scripts.vendor));
});

// Moves jquery scripts to the vender script location
gulp.task('scripts:validation', function() {
  gulp.src('node_modules/jquery-validation/dist/jquery.validate.min.js')
    .pipe(gulp.dest(conf.path.dest.scripts.vendor));
});

// Moves boopstrap scripts to the vender script location
gulp.task('scripts:bootstrap', ['scripts:bootstrap:jquery', 'scripts:bootstrap:popper'], function() {
  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest(conf.path.dest.scripts.vendor));
});

// Moves jquery scripts to the vender script location
gulp.task('scripts:bootstrap:jquery', function() {
  gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(conf.path.dest.scripts.vendor));
});

// Moves popper scripts to the vender script location
gulp.task('scripts:bootstrap:popper', function() {
  gulp.src('node_modules/popper.js/dist/umd/popper.min.js')
    .pipe(gulp.dest(conf.path.dest.scripts.vendor));
});

gulp.task('scripts:custom:watch', ['scripts:custom'], function() {
  return global.browserSync.reload(conf.path.dest.scripts.base);
});
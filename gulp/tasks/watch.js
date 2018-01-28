/*
|--------------------------------------------------------------------------
| GULP WATCH TASKS
|--------------------------------------------------------------------------
|
| This file contains the Gulp watch tasks
|
*/

const gulp  = require('gulp');
const watch = require('gulp-watch');

const conf = require('../gulpconfig');

// Task watching for changes and ruinng approiate tasks
gulp.task('watch', ['css', 'html', 'browser-sync'], function() {
  gulp.watch(conf.path.src.scss + '/**/*.scss', ['css:watch']);
  gulp.watch(conf.path.src.base + '/*.html', ['html:watch']);
});
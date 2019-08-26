'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require("node-sass");

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});

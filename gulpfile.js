'use strict';
 
var gulp = require('gulp');


var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

const imagemin = require('gulp-imagemin');
 
gulp.task("imagemin", function() {
  return gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

const babel = require('gulp-babel');
 
gulp.task('cbabel', () =>
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
);
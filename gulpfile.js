'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./src/style/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/style'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/style/scss/*.scss', gulp.series('sass'));
});
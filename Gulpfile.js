'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('scss/app.scss')
        .pipe(sass({
            includePaths: ['scss']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('scss/*.scss', "js/*.js", ['sass']);
});

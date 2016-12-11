'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');



gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
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

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('compress', function(cb) {
    pump([
            gulp.src('./js/*.js'),
            uglify(),
            gulp.dest('./dest/js')
        ],
        cb
    );
});

gulp.task('minify', function() {
    return gulp.src('./*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dest'));
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('scss/*.scss', ['sass']);
});

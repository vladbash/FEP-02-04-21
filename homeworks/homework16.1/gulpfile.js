const { src, dest, task, watch, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function clean(cb) {
    // body omitted
    cb();
}


function buildJS() {
    return src(['src/**/*.js', 'src/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('build/'));
}

function buildCSS(cb) {
    console.log('css is building');
    cb();
}

function watchJS() {
    watch(['src/**/*.js', 'src/*.js'], series(clean, buildJS));
    // watch(['src/**/*.js', 'src/*.js'], parallel(clean, buildJS));
}

task('build:css', buildCSS);
task('build:js', buildJS);
task('watch:js', watchJS);

task('build:all', series(buildCSS, buildJS));
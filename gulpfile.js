const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const order = require('gulp-order');


const buildJS = function () {
    return src('./src/**/*.js')
        .pipe(order([
            'spa.routing.js',
            'spa.js',
            'index.js',
        ], {
            base: './src'
        }))
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(dest('./dist/'));
};

function build(callback) {
        buildJS();

        callback();
}
// no serve function for now, too small a project.

exports.build = build;
exports.default = (callback) => {
        callback();
};

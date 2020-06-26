const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
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

const buildCSS = function () {
    return src(['./src/**/*.css', './src/**/*.scss', './node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(sass({outputStyle: 'Expanded'}))
        .pipe(cleanCss({ compatability: '*' }))
        .pipe(concat('app.css'))
        .pipe(dest('./dist/'));
};

const buildVendors = function () {
    return src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js'
    ])
        .pipe(babel())
        .pipe(concat('vendor.js'))
        .pipe(terser())
        .pipe(dest('./dist/'));
};

function build(callback) {
        buildJS();
        buildCSS();
        buildVendors();

        callback();
}

// no serve function for now, too small a project.
exports.build = build;
exports.default = (callback) => {
        callback();
};

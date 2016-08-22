"use strict";

let config = require("../../config");
let gulp = require("gulp");
let browserifyStr = require("browserify-string");
let source = require("vinyl-source-stream");
let uglify = require("gulp-uglify");
let babelify = require("babelify");
let buffer = require("gulp-buffer");

module.exports = () => {
    let b = browserifyStr(`
        let $ = global.$ = global.jQuery = require("jquery");
        require("bootstrap");
        module.exports = $;
    `);

    let bundleStream = b
        .transform(babelify, { presets: ["es2015"] })
        .require("jquery")
        .bundle();

    bundleStream
        .pipe(source("bootstrap.min.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.vendor + "/bootstrap"));
};

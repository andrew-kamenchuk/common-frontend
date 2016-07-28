"use strict";

var config = require("../../config");
var gulp = require("gulp");
var browserifyStr = require("browserify-string");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var babelify = require("babelify");
var buffer = require("gulp-buffer");

// jshint multistr: true
module.exports = function() {

    var b = browserifyStr("\
        var $ = global.$ = global.jQuery = require(\"jquery\");\
        require(\"bootstrap\");\
        module.exports = $;\
    ");

    var bundleStream = b
        .transform(babelify, { presets: ["es2015"] })
        .require("jquery")
        .bundle();

    bundleStream
        .pipe(source("bootstrap.min.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.vendor + "/bootstrap"));
};

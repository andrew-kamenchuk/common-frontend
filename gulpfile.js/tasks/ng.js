"use strict";

var config = require("../../config");
var gulp = require("gulp");
var browserifyStr = require("browserify-string");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var babelify = require("babelify");
var buffer = require("gulp-buffer");

module.exports = function() {
    var b = browserifyStr("module.exports = global.angular = require(\"angular\");");

    var bundleStream = b
        .transform(babelify, { presets: ["es2015"] })
        .require("angular")
        .bundle();

    bundleStream
        .pipe(source("angular.min.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.vendor + "/angular"));
};

"use strict";

var config = require("../../config");
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var streamify = require("gulp-streamify");
var babelify = require("babelify");

module.exports = function() {
    var bundleStream = browserify(config.src.js + "/" + config.app.src)
        .transform(babelify, { presets: ["es2015"] })
        .bundle();

    bundleStream
        .pipe(source(config.app.dest))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.dest.public + "/js"));
};

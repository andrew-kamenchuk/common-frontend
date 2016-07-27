"use strict";

var config = require("../../config");
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var streamify = require("gulp-streamify");
var babelify = require("babelify");
var glob = require("glob");
var path = require("path");

function publish(file)
{
    var bundleStream = browserify(file)
        .transform(babelify, { presets: ["es2015"] })
        .external("jquery")
        .bundle();

    bundleStream
        .pipe(source(path.relative(config.src.js, file)))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.dest.assets + "/js"));
}

module.exports = function() {
    glob(config.src.js + "/**/*-app.js", function(err, files) {
        files.map(publish);
    });
};

"use strict";

var config = require("../../config");
var gulp = require("gulp");
var browserify = require("browserify");
var uglify = require("gulp-uglify");
var babelify = require("babelify");
var tap = require("gulp-tap");
var buffer = require("gulp-buffer");
var rev = require("gulp-rev");

module.exports = function() {
    gulp.src(config.src.js + "/**/*-app.js", { read: false })

        // browserify content of each -app.js file separately
        .pipe(tap(function(file) {
            file.contents = browserify(file.path)
                .transform(babelify, { presets: ["es2015"] })
                .external("jquery")
                .external("angular")
                .bundle();
        }))

        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.assets + "/js"))
        .pipe(rev())
        .pipe(gulp.dest(config.dest.assets + "/js"))
        .pipe(rev.manifest({ merge: true }))
        .pipe(gulp.dest(config.dest.assets));
};

module.exports.deps = ["jquery-bootstrap", "ng"];

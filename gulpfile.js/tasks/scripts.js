"use strict";

module.exports = (gulp, config) => {
    const browserify = require("browserify");
    const uglify     = require("gulp-uglify");
    const babelify   = require("babelify");
    const tap        = require("gulp-tap");
    const buffer     = require("gulp-buffer");
    const rev        = require("gulp-rev");

    return () => gulp
        .src(config.src.js + "/**/*-app.js", { read: false })
        // browserify content of each -app.js file separately
        .pipe(tap((file) => {
            file.contents = browserify([require.resolve("babel-polyfill"), file.path])
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

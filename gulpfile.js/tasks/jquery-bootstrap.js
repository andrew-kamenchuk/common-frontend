"use strict";

module.exports = (gulp, config) => {
    const browserifyStr = require("browserify-string");
    const source = require("vinyl-source-stream");
    const uglify = require("gulp-uglify");
    const babelify = require("babelify");
    const buffer = require("gulp-buffer");

    return () => {
        const b = browserifyStr(`
            let $ = global.$ = global.jQuery = require("jquery");
            require("bootstrap");
            module.exports = $;
        `);

        const bundleStream = b
            .transform(babelify, { presets: ["es2015"] })
            .require("jquery")
            .bundle();

        return bundleStream
            .pipe(source("bootstrap.min.js"))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(config.dest.vendor + "/bootstrap"));
    };
};

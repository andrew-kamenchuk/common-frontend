"use strict";

module.exports = (gulp, config) =>
    () => gulp
        .src(config.src.node + "/font-awesome/{css,fonts}/*")
        .pipe(gulp.dest(config.dest.vendor + "/font-awesome"));

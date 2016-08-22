"use strict";

module.exports = (gulp, config) =>
    () => gulp
        .src(config.src.node + "/bootstrap/dist/{css,fonts}/*")
        .pipe(gulp.dest(config.dest.vendor + "/bootstrap"));

module.exports.deps = ["jquery-bootstrap"];

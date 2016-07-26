"use strict";

var config = require("../../config");
var gulp = require("gulp");

module.exports = function () {
    gulp.src(config.src.node + "/bootstrap/dist/{css,fonts}/*")
        .pipe(gulp.dest(config.dest.vendor + "/bootstrap"));
};

"use strict";

var config = require("../../config");
var gulp = require("gulp");

module.exports = function () {
    gulp.src(config.src.node + "/font-awesome/{css,fonts}/*")
        .pipe(gulp.dest(config.dest.vendor + "/font-awesome"));
};

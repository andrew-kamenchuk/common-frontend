"use strict";

var config = require("../../config");
var gulp = require("gulp");

module.exports = function () {
    gulp.watch(config.app.src, ["main"]);
};

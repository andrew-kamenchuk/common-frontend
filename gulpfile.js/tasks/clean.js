"use strict";

var config = require("../../config");
var del = require("del");

module.exports = function () {
    return del([
        config.dest.vendor,
        config.dest.public + "/js",
        config.dest.public + "/css",
        config.dest.public + "/fonts",
        config.dest.public + "/img",
    ], { force: true });
};

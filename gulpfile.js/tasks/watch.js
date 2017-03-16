"use strict";

module.exports = (gulp, config) => () => {
    gulp.watch(config.src.js + "/**/*-app.js", ["scripts"]);
};

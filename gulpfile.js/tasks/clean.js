"use strict";

module.exports = (gulp, config) => {
    const del = require("del");

    return () => {
        del([
            config.dest.vendor,
            config.dest.assets + "/js",
            config.dest.assets + "/css",
            config.dest.assets + "/fonts",
            config.dest.assets + "/img",
            config.dest.assets + "/rev-manifest.json",
        ], { force: true });
    };
};

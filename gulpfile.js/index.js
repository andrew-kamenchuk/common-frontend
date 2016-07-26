var config = require("../config");
var gulp = require("gulp");

var tasks = require("require-dir")("./tasks", {recurse: true});

for (var name in tasks) {
    if (!tasks.hasOwnProperty(name)) {
        continue;
    }

    gulp.task(name, tasks[name]);
}

if ("default" in config) {
    gulp.task("default", config.default);
}

var config = require("../config");
var gulp = require("gulp");

var tasks = require("require-dir")("./tasks", { recurse: true });

for (var name in tasks) {
    if (!tasks.hasOwnProperty(name)) {
        continue;
    }

    var task = tasks[name];
    var deps = task.deps || [];

    gulp.task(name, deps, task);
}

for (var name in config.tasks) {
    if (!config.tasks.hasOwnProperty(name)) {
        continue;
    }

    gulp.task(name, config.tasks[name]);
}

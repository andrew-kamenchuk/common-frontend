const config = require("../config");
const gulp = require("gulp");

const tasks = require("require-dir")("./tasks", { recurse: true });

for (const name of Object.keys(tasks)) {

    const task = tasks[name](gulp, config);
    const deps = tasks[name].deps || [];

    gulp.task(name, deps, task);
}

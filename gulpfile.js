let gulp = require("gulp");
let sass = require("gulp-sass");
let watch = require("gulp-watch");

gulp.task("default", function (){
    return watch("**/*.scss", function () {
    gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    });
});
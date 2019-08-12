import gulp from "gulp";
import clean from "gulp-clean";
import run from "gulp-run";
import rename from "gulp-rename";
import replace from "gulp-replace";
import zip from "gulp-zip";
import { convert } from "./scripts";

const version = "v1.7.0";
const category = "Installer";

export function cleanDist() {
  return gulp.src("./dist/*").pipe(clean());
}

export function sync() {
  return run(
    `rdme docs ./dist/${version}/${category} --key=pTnDF8nI5J3Sg3UneyMq0YbnSH4nEDV0 --version=${version}`
  ).exec();
}

export function makePackage() {
  return gulp
    .src(`./dist/**/*`)
    .pipe(zip("package.zip"))
    .pipe(gulp.dest("dist"));
}

export function scripts() {
  return gulp
    .src("./template/**/*.md")
    .pipe(replace(/.+/gs, convert))
    .pipe(
      rename(function(path) {
        path.basename = path.basename.replace(/\s/g, "-").toLowerCase();
      })
    )
    .pipe(gulp.dest("dist"));
}

export function watch() {
  return gulp.watch(
    ["src/**/*", "./template/**/*.md"],
    gulp.series(cleanDist, scripts, sync)
  );
}

const build = gulp.series(cleanDist, scripts);
export const deploy = gulp.series(cleanDist, scripts, makePackage);

export default build;

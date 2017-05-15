// Dependencies
const gulp = require('gulp');
const gulpTypeScript = require('gulp-typescript');

// Initializations
const tsConfig = require('./tsconfig.json');
const tsProject = gulpTypeScript.createProject('tsconfig.json');

gulp.task('dist', ['build_ts']);

// Tasks
gulp.task('build_ts', function() {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(tsConfig.compilerOptions.outDir));
});

gulp.task('default', function() {
  gulp.watch('src/ts/**/*.*', ['build_ts']);
});


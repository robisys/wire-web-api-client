// Dependencies
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpTypeScript = require('gulp-typescript');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const runSequence = require('run-sequence');
const webpack = require('webpack');

// Initializations
const tsConfig = require('./tsconfig.json');
const tsProject = gulpTypeScript.createProject('tsconfig.json');
const webpackConfig = require('./webpack.config.js');

// Aliases
gulp.task('b', ['build']);
gulp.task('c', ['clean']);
gulp.task('d', ['dist']);
gulp.task('i', ['install']);
gulp.task('w', ['webpack']);

gulp.task('clean', ['clean_commonjs', 'clean_lib', 'clean_window'], () => {
});

gulp.task('clean_commonjs', () => gulp.src('dist/commonjs').pipe(gulpClean()));

gulp.task('clean_lib', () => gulp.src('dist/lib').pipe(gulpClean()));

gulp.task('clean_window', () => gulp.src('dist/window').pipe(gulpClean()));

gulp.task('install', () => {
});

// Tasks
gulp.task('build', ['clean'], function(done) {
  runSequence('install', 'webpack', done);
});

gulp.task('build_ts', function() {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(tsConfig.compilerOptions.outDir));
});

gulp.task('default', ['build'], function() {
  gulp.watch('src/ts/**/*.*', ['webpack']);
  gulp.watch('dist/**/*.*').on('change', browserSync.reload);

  browserSync.init({
    port: 3636,
    server: {baseDir: './'},
    startPath: '/dist'
  });
});

gulp.task('dist', ['clean'], function(done) {
  runSequence('install', 'webpack', done);
});

gulp.task('webpack', ['build_ts'], function(callback) {
  const compiler = webpack(webpackConfig);

  compiler.apply(new ProgressPlugin((percentage, message) => {
    console.log(`${~~(percentage * 100)}%`, message);
  }));

  compiler.run((error) => {
    if (error) {
      throw new gutil.PluginError('webpack', error);
    }

    callback();
  });
});

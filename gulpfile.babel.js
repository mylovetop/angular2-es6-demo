import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import htmlmin from 'gulp-htmlmin';//html压缩
import uglify from 'gulp-uglify';//js压缩
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

import del from 'del';

gulp.task('copy', () => {
  return gulp.src('index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('release'));
});

gulp.task('html', () => {
  return gulp.src(['./app/view/*/*.html','./app/view/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('release/view'));
});

gulp.task('build', ['copy', 'html'], () => {
  const b = browserify('index.js')
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('index.js', watchify.args)
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('release');
});

gulp.task('default', ['copy','html', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('release'));
}

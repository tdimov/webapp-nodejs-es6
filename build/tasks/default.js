import gulp from 'gulp';
import run from 'run-sequence';

gulp.task('default', cb => {
  run('server', 'build', 'browser-sync', 'watch', cb);
});

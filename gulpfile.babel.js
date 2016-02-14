import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import jshint from 'gulp-jshint';

const paths = {
  js: ['./src/**/*.js'],
  destination: './app'
};

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
  run('clean', 'jshint', 'babel', 'restart', cb);
});

gulp.task('clean', cb => {
  rimraf(paths.destination, cb);
});

gulp.task('jshint', function() {
  return gulp.src(paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

let express;

gulp.task('server', () => {
  express = server.new(paths.destination);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  return watch(paths.js, () => {
    gulp.start('build');
  });
});
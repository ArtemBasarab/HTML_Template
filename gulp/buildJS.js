import gulp from 'gulp'
import browserSync from 'browser-sync'

export const buildJS = () => {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
}

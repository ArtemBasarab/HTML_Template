import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import strReplace from 'gulp-replace'
import browserSync from 'browser-sync'

export const buildHTML = () => {
  return gulp.src('src/*.html')
    .pipe(fileInclude())
    .pipe(strReplace('../img/', 'img/'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
}

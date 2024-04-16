import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import browserSync from 'browser-sync'

export const imgMin = () => {
  return gulp.src('dist/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

export const copyImg = () => {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
}

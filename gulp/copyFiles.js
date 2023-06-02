import gulp from 'gulp'

export const copyFiles = () => {
  return gulp.src([
    'src/css/*.css',
    'src/img/**/*.*',
    'src/js/**/*.js',
    'src/libs/**/*.*',
    'src/fonts/**/*.*',
    'src/*.html'
  ], { base: 'src' })

    .pipe(gulp.dest('dist'))
}

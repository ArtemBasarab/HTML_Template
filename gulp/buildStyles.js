import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'
const sass = gulpSass(dartSass)

const generateStyles = () => {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
}

const copyStyles = () => {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

export const buildStyles = gulp.series(generateStyles, copyStyles)

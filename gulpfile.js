import gulp from 'gulp'

import { cleanDist } from './gulp/cleanDist.js'
import { copyFiles } from './gulp/copyFiles.js'
import { buildStyles } from './gulp/buildStyles.js'
import { buildHTML } from './gulp/buildHTML.js'
import { buildJS } from './gulp/buildJS.js'
import { imgMin, copyImg } from './gulp/createImg.js'
import { browserSynchronization } from './gulp/browserSync.js'

const watcher = () => {
  gulp.watch(['src/*.html', 'src/partials/*.html'], buildHTML)
  gulp.watch('src/scss/*.scss', buildStyles)
  gulp.watch('src/js/*.js', buildJS)
  gulp.watch('src/img/*.*', copyImg)
}

gulp.task('build', gulp.series(cleanDist, copyFiles))
gulp.task('default', gulp.parallel(watcher, browserSynchronization))
gulp.task('min', imgMin)

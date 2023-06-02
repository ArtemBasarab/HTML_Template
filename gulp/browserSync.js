import browserSync from 'browser-sync'

export const browserSynchronization = () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
}

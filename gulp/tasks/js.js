import webpack from "webpack-stream"

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error JS"
      }))
    )
    .pipe(webpack({
      watch: true,
      mode: app.isBuild ? 'production' : 'development',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}
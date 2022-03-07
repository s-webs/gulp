import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const images = () => {
  return app.gulp.src(app.path.src.images, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error Images"
      }))
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream())
}
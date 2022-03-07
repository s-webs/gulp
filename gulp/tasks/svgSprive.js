import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
  return app.gulp.src(`${app.path.src.svgIcons}`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SVG icons',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../images/icons/icons.svg`,
          example: true
        }
      }
    }))
    .pipe(app.gulp.dest(`${app.path.build.svgIcons}`))
}
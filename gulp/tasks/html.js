import fileinclude from "gulp-file-include"
import webpHtmlNoSvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import gulpHtmlPrettify from "gulp-html-prettify"


export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error HTML"
      }))
    )
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@assets\//g, 'assets/'))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
    .pipe(app.plugins.if(app.isBuild, versionNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ],
      },
      'output': {
        'file': 'gulp/version.json'
      },
    })))
    .pipe(gulpHtmlPrettify({
      indent_size: 2
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}
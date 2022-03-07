import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./app`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${srcFolder}/assets/js/`,
    images: `${buildFolder}/assets/images/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/assets/fonts/`,
    files: `${buildFolder}/assets/`,
    svgIcons: `${buildFolder}/assets/images/icons/*.svg`
  },
  src: {
    js: `${srcFolder}/assets/js/app.js`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/assets/images/**/*.svg`,
    scss: `${srcFolder}/assets/scss/app.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/assets/**/*.*`,
    svgIcons: `${srcFolder}/assets/icons/*.svg`
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/**/*.scss`,
    files: `${srcFolder}/assets/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
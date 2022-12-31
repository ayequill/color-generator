const gulp= require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('sass'))

function styles (){
    return gulp.src('./src/scss/*.scss')

    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
}

function watch(){
    // initialize local server
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })

    gulp.watch('./scss/**/*.scss', styles)
    gulp.watch('./*html').on('change', browserSync.reload)
    gulp.watch('./js/**/.js').on('change', browserSync.reload)
}

exports.styles = styles
exports.watch = watch
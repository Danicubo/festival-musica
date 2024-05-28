import * as dartSass from 'sass' 
import { src, dest, watch, series } from 'gulp'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function js( done ) {
    src('src/js/app.js')
        .pipe(dest( 'build/js' ) )
    done()
}

export function css ( done ) {
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps : true}) )
    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css) // "*" se refiere a todos los archivos que hay dentro de las carpetas 
    watch('src/js/**/*.js', js) // "*" se refiere a todos los archivos que hay dentro de las carpetas 
}

export default series( js, css, dev)
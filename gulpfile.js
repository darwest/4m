const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function(){
    return gulp.src('./scss/**/*.scss') // Оновлено шлях
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./')) // Оновлено шлях для карт
        .pipe(gulp.dest('./css')) // Оновлено шлях
});

gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile')); // Оновлено шлях
});

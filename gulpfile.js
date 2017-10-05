const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src('app/pug/**/*.pug')
    .pipe(pug({
        pretty: '\t'
      }))
      .pipe(gulp.dest('dist/html'))
});

gulp.task('watch', () => {
    gulp.watch('app/pug/**/*.pug', ['pug'])
});
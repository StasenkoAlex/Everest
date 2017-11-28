var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    bs  = require('browser-sync');
    //path = 'design/responsive/';

gulp.task('bs', function(){
  bs.init({
    server:'.'
  });
});

gulp.task('sass', function(){
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['> 5%', 'last 2 versions', 'ie >= 10']
    }))
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['sass', 'bs'], function(){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('js/**/*.js').on('change', bs.reload);
  gulp.watch('*.html').on('change', bs.reload);
});

gulp.task('default', ['bs', 'sass', 'watch']);
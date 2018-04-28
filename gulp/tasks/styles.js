var gulp = require('gulp'),
postCss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simplevars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postCss([cssimport, mixins, simplevars, nested, autoprefixer]))

  .on('error', function(infoError){
    console.log(infoError.toString());
    this.emit('end');
  })

  .pipe(gulp.dest('./app/temp/styles'));
});

var gulp = require('gulp'),
var webpack = require('webpack');

gulp.task('scripts', function({
  webpack(require('../../webpack.config.js'), function(callback){
    console.log("webpack test de fonctionnement");
    callback();
  });
}));


var gulp =  require('gulp'),
webpack = require('webpack');
gulp.task('scripts', function(callback){
  webpack(require('../../webpack.config.js'), function(){
    console.log('Voici webpack, on regarde son fonctionnement');
    callback();
  });
});

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var fs = require('fs');
var babelify = require("babelify");
var browserify = require('browserify');
var globals = require('./src/js/globals');
var paths = globals.paths;

var bundler = browserify(paths.js_entry_point);
bundler.transform(babelify, {presets: ['es2015', 'react']});

gulp.task('bundle-js', function () {
	bundler.bundle()
    	.on('error', function (err) { console.error(err); })
    	.pipe(fs.createWriteStream(paths.js_dest + '/bundle.js'));
});

gulp.task('bundle-css', function () {
    return gulp.src(paths.css_files)
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(paths.css_dest));
});

gulp.task('watch-js-css', function(){
    gulp.watch('./src/js/**/*.js', ['bundle-js']);
    gulp.watch(paths.css_files, ['bundle-css']);
});

gulp.task('default', ['bundle-js', 'bundle-css']);

gulp.task('watch', ['bundle-js', 'bundle-css', 'watch-js-css']);

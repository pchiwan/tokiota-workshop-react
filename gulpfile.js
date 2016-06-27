var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var fs = require('fs');
var babelify = require("babelify");
var browserify = require('browserify');
var endPoints = JSON.parse(fs.readFileSync('./package.json')).endPoints;

var bundler = browserify(endPoints.js_entry_point);
bundler.transform(babelify, {presets: ['react']});

gulp.task('bundle-js', function(){
	bundler.bundle()
    	.on('error', function (err) { console.error(err); })
    	.pipe(fs.createWriteStream(endPoints.js_dest));
});

gulp.task('bundle-css', function () {
    return gulp.src(endPoints.css_files)
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(endPoints.css_dest));
});

gulp.task('watch', function(){
    gulp.watch(endPoints.js_files, ['bundle-js']);
	gulp.watch(endPoints.css_files, ['bundle-css']);
});

gulp.task('default', ['bundle-js', 'bundle-css', 'watch']);

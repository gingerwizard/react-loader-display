var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
gulp.task("bundle_js", function () {
    return browserify({
        entries: './app.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./'));
});
gulp.task('watch', function () {
    gulp.watch('./*.js', ['bundle_js']);
    gulp.watch('./Redux/*.js', ['bundle_js']);
});
//# sourceMappingURL=gulpfile.js.map
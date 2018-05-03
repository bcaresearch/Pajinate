var gulp = require('gulp');
var minify = require('gulp-minify');

var minifyFiles = [
    'jquery.pajinate.js'
];

gulp.task('minify', function() {
    gulp.src(minifyFiles)
        .pipe(minify())
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'minify' ]);

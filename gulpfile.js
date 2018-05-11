var gulp = require('gulp');
var minify = require('gulp-minify');

var minifyFiles = [
    'jquery.pajinate.js'
];

gulp.task('minify', function() {
    gulp.src('jquery.pajinate.js')
        .pipe(minify({
            ext:{ min:'.min.js' }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'minify' ]);

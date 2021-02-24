const gulp       = require('gulp');
const mocha      = require('gulp-mocha');

gulp.task('test-component', () => {
    return gulp
        .src('test/component/auth.test.js')
        .pipe(mocha({ exit: true }));
});

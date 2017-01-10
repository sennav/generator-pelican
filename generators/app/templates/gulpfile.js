var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;

// Static server
gulp.task('serve', ['pelican'], function() {
    browserSync.init({
        server: {
            baseDir: "output"
        }
    });
    // gulp.watch('content/**').on('change', browserSync.reload);
});
gulp.task('pelican', function(cb){
    exec('pelican', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task('watch', function(){
  gulp.watch('content/**', ['pelican', browserSync.reload]);
});
gulp.task('default', ['pelican', 'watch', 'serve']);
/**
 * Created by qingzhui(670761743@qq.com) on 2016/8/17 0017.
 */

var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
	gulp.src('src/**.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist'));
});
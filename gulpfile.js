var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task ('default', function(){
	console.log(10);
}
);
gulp.task('sass',function(){
gulp.src('./sass/**/*.sass')
.pipe(sass())
.pipe(gulp.dest('./css'));
}
	) 
gulp.task('saa:watch',function(){
	gulp.watch('./project/**/*.scss',['sass']);

});

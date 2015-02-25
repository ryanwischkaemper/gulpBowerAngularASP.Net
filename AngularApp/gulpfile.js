var gulp = require('gulp'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort'),
    less = require('gulp-less'),
    templateCache = require('gulp-angular-templatecache'),
    minifyHTML = require('gulp-minify-html'),
    ngAnnotate = require('gulp-ng-annotate'),
    runSequence = require('run-sequence');

gulp.task('js', function() {
    var jsFiles = gulp.src(['./public/app/**/*.js', '!./public/app/templates.js'])
		.pipe(angularFilesort())
		.pipe(ngAnnotate({
		    add: true,
		    single_quotes: true
		}));

    return gulp.src('./views/shared/_Layout.cshtml')
		.pipe(inject(
			jsFiles
		))
		.pipe(gulp.dest('./views/shared'));
});

gulp.task('styles', function() {
    var cssFiles = gulp.src('./public/content/styles/app.less')
		.pipe(less());

   
    return gulp.src('./views/shared/_Layout.cshtml')
		.pipe(inject(
			cssFiles
		))
		.pipe(gulp.dest('./views/shared'));
});

gulp.task('bowerfiles', function() {
    return gulp.src('./views/shared/_Layout.cshtml')
		.pipe(inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower', base: 'vendor' }))
		.pipe(gulp.dest('./views/shared'));
});


gulp.task('build', ['templates'], function() {
    runSequence('bowerfiles','styles','js');
}); 


gulp.task('templates', function() {
    return gulp.src('./public/app/**/*.html')
		.pipe(minifyHTML({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(templateCache({
			standalone: true
		}))
		.pipe(gulp.dest('app'));
});


gulp.task('default',['build'], function(){
    gulp.watch('public/app/**/*.js', ['js']);
	gulp.watch('public/app/**/*.html', ['templates']);
	gulp.watch('public/content/styles/app.less', ['styles']);
});


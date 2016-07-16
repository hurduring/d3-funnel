const gulp = require('gulp');
const sass = require('gulp-sass');
const scsslint = require('gulp-scss-lint');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('test-style', () =>
	gulp.src(['./scss/**/*.scss', '!./scss/_cayman.scss'])
		.pipe(scsslint())
);

gulp.task('build-style', ['test-style'], () =>
	gulp.src('./scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded',
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
);

gulp.task('watch', () => {
	gulp.watch(['./scss/**/*.scss'], ['build-style']);
});

gulp.task('default', ['build-style']);

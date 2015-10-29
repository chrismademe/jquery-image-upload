var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

    gulp.task('styles', function() {
        return sass('src/css/jquery.image-upload.scss', { style: 'expanded' })
        .pipe(plumber())
        .pipe(gulp.dest('build/'))
        .pipe(autoprefixer({cascade: false}))
        .pipe(minifycss())
        .pipe(gulp.dest('build/min'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('scripts', function() {
        return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(concat('jquery.image-upload.js'))
        .pipe(gulp.dest('build'))
        .pipe(uglify())
        .pipe(gulp.dest('build/min'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    /**
     * Default task
     *
     * This task runs styles, scripts and images.
     */
    gulp.task('default', function() {
        gulp.start('styles', 'scripts');
    });

    /**
     * Watch Task
     *
     * When running, Watch will watch your
     * files for changes and run the appropriate
     * task each time.
     */
    gulp.task('watch', function() {

        // Watch .scss files
        gulp.watch(['src/css/*.scss', 'src/css/**/*.scss'], ['styles']);

        // Watch .js files
        gulp.watch('src/js/*.js', ['scripts']);

    });

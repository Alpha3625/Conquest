const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task('default', gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'scss:dev', 'images:dev', 'icons:dev', 'fonts:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
));

gulp.task('docs', gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'scss:docs', 'images:docs', 'icons:docs', 'fonts:docs', 'js:docs'),
    gulp.parallel('server:docs')
));
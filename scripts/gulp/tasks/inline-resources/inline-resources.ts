import { dest, src, task } from 'gulp';
import { copyResources } from './copy-resources';
import { BUILD_DIR, LIB_DIR } from '../config';

task('inline-resources', () => {
  src([
    `${BUILD_DIR}/**/*.html`,
    `${BUILD_DIR}/**/*.css`,
    `${BUILD_DIR}/**/*.scss`,
    `${BUILD_DIR}/**/LICENSE.txt`,
    `${BUILD_DIR}/**/README.md`,
    `${BUILD_DIR}/**/package.json`,
  ])
    .pipe(dest(LIB_DIR))
    .on('end', () => copyResources(LIB_DIR));
});

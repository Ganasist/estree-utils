'use strict';

import {map, remove, compose} from 'ramda';
import fs from 'fs';
import gulp from 'gulp';

gulp.task('build', () => {

  fs.readdir('src', (err, data) => {

    function removeIndexFile(files){
      const indexIndex = files.indexOf('index.js');
      return remove(indexIndex, 1, files);
    }

    function removeTestsFolder(files){
      const testsIndex = files.indexOf('__tests__');
      return remove(testsIndex, 1, files);
    }

    function removeExtension(str){
      const periodIndex = str.split('').indexOf('.');
      return str.substring(0, periodIndex);
    }

    function buildExportStatement(file){
      return `export ${file} from './${file}'\n`;
    }

    const files = compose(
      map(buildExportStatement),
      map(removeExtension),
      removeIndexFile,
      removeTestsFolder
    )(data);

    fs.writeFileSync('./src/index.js', files.join(''));
  });
});

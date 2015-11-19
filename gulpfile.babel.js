'use strict';

import {map, remove, compose} from 'ramda';
import fs from 'fs';
import gulp from 'gulp';

gulp.task('build', () => {

  fs.readdir('utils', (err, data) => {

    function removeIndexFile(files){
      let indexIndex = files.indexOf('index.js');
      return remove(indexIndex, 1, files);
    }

    function removeExtension(str){
      let periodIndex = str.split('').indexOf('.');
      return str.substring(0, periodIndex);
    }

    function buildExportStatement(file){
      return `export const ${file} = require('./${file}');\n`;
    }

    const files = compose(map(buildExportStatement), map(removeExtension), removeIndexFile)(data);

    fs.writeFileSync('./utils/index.js', files.join(''));
  });
});

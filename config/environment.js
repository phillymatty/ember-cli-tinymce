/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    tinyMCE:{
      load: true,
      version: 5,
      sriHash: 'sha384-ra+Rko5zfPsL5hsVdGB51A+C68KypswBUQTUkOfeSPx9Lp8yQh1susZ1uIMy9oKx'
    }
  };
};

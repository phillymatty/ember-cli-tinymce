/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    tinyMCE:{
      load: true,
      version: 5,
      apiKey:'no-api-key',
    }
  };
};

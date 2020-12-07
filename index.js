/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-tinymce-5',
  /* contentFor: function(type, config) {
    var content = '';
    if (type === 'head-footer' && config['tinyMCE'] && config['tinyMCE']['load']) {
        
      var src = "https://cdn.tiny.cloud/1/"+ config['tinyMCE']['apiKey'] +"/tinymce/"+ config['tinyMCE']['version'] +"/tinymce.min.js";
      content = '<script type="text/javascript" src="' + src + '"crossorigin="anonymous"></script>';
    }
    return content;
  }, */
  included: function(app) {
    app.import('app/styles/addons.css');
    app.import('node_modules/tinymce/tinymce.min.js');
  }
};

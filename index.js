/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-tinymce',
  contentFor: function(type, config) {
    var content = '';
    if (type === 'head-footer' && config['tinyMCE'] && config['tinyMCE']['load']) {
      var src = "https://cdn.tiny.cloud/1/no-api-key/tinymce/"+ config['tinyMCE']['version'] +"/tinymce.min.js";
      var sriHash = config['tinyMCE']['sriHash'];
      content = '<script type="text/javascript" src="' + src + '" integrity="' + sriHash + '" crossorigin="anonymous"></script>';
    }
    return content;
  },
  included: function(app) {
    app.import('app/styles/addons.css');
  }
};

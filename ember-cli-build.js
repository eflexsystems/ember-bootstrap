'use strict';
/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: !!process.env.BABELPOLYFILL
    },
    autoImport: {
      forbidEval: true
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  if ('@embroider/webpack' in app.dependencies()) {
    const { Webpack } = require('@embroider/webpack'); // eslint-disable-line node/no-missing-require
    return require('@embroider/compat').compatBuild(app, Webpack); // eslint-disable-line node/no-missing-require
  } else {
    return app.toTree();
  }
};

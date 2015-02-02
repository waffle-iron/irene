/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var htmlmin = require('broccoli-htmlmin');
var assetRev = require('broccoli-asset-rev');

var app = new EmberApp({
  storeConfigInMeta: false
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/animate.css/animate.css');
app.import('bower_components/ember-uploader/dist/ember-uploader.js');
app.import('bower_components/socket.io-client/socket.io.js')
app.import('bower_components/ember-sockets/dist/ember-sockets.js')

/*
 * No VNC includes
 */
app.import('bower_components/no-vnc/include/util.js')
app.import('bower_components/no-vnc/include/webutil.js')
app.import('bower_components/no-vnc/include/base64.js')
app.import('bower_components/no-vnc/include/websock.js')
app.import('bower_components/no-vnc/include/des.js')
app.import('bower_components/no-vnc/include/keysymdef.js')
app.import('bower_components/no-vnc/include/keyboard.js')
app.import('bower_components/no-vnc/include/input.js')
app.import('bower_components/no-vnc/include/display.js')
app.import('bower_components/no-vnc/include/jsunzip.js')
app.import('bower_components/no-vnc/include/rfb.js')
app.import('bower_components/no-vnc/include/keysym.js')

app.import('vendor/scripts/jquery.drawPieChart.js');

/*
 * FIXME: THis is a hack to get handlebars working with production builds.
 * This needs to be fixed when handlebars minification is fixed.
 *
 * - dhilipsiva
 */
var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(index) {
  app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
}

var tree = app.toTree();

options = {
  quotes: true
};

if (false) {
  tree = assetRev(tree, {
    extensions: ['js', 'css', 'png', 'jpg', 'gif'],
    replaceExtensions: ['html', 'js', 'css'],
    prepend: '//du6tdhcax0qep.cloudfront.net/'
  });
}

tree = htmlmin(tree, options);

module.exports = tree;

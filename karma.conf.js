// Karma configuration
// Generated on Tue May 17 2016 14:33:19 GMT+0300 (EEST)
var fs = require('fs');

module.exports = function(config) {
  if (!process.env.SAUCE_USERNAME) {
    if (!fs.existsSync('sauce.json')) {
      console.log('Create a sauce-labs.json with your credentials.');
      process.exit(1);
    } else {
      process.env.SAUCE_USERNAME = require('./sauce-labs').username;
      process.env.SAUCE_ACCESS_KEY = require('./sauce-labs').accessKey;
    }
  }

  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '30'
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  };


  config.set({
    basePath: '',
    frameworks: ['mocha',  'browserify', 'sinon-chai'],
    client: {
      chai: {
        includeStack: true
      }
    },
    files: [
      'dist/sdk.js',
      'atom-sdk/test/*spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'dist/sdk.js': ['browserify'],
      'atom-sdk/test/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
       [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }]
      ]
    },
    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', dir: 'coverage'},
        {'type': 'lcov'}
      ]
    },
    reporters: ['progress', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: 'info',
    autoWatch: false,
    sauceLabs: {
      testName: 'IronSource Atom js',
      startConnect: false
    },
    browserNoActivityTimeout: 60000,
    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: ['Chrome'],
    singleRun: true
  })
};

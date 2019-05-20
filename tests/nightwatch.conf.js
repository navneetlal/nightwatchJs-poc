const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

const config = {
  src_folders: [
    'tests/features'
  ],
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: 'localhost',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path,
      'webdriver.gecko.driver': geckoDriver.path
    }
  },
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: false
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javaScriptEnables: true,
        acceptSslCert: true,
        nativeEvents: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    }
  }
}

module.exports = config;
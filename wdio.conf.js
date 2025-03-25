const fs = require('fs');
const path = require('path');

exports.config = {
    runner: 'local',
    port: 57090, // Match the Appium service port
    specs: [
        // './test/specs/loginTest.js',
        './test/specs/onboardingTest.js',
        // './test/specs/popTest.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'iqoo',
        'appium:appPackage': 'com.krishivaas',
        'appium:appActivity': 'com.krishivaas.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 30000,
        'appium:noReset': true, // Prevents app reset between sessions
        'appium:fullReset': false, // Prevents full reset of the app
        'appium:autoLaunch': false // Prevents app from relaunching automatically
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            command: 'appium'
        }]
    ],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    beforeSession: function (config, capabilities, specs) {
        const allureResultsDir = path.resolve(__dirname, 'allure-results');
        if (fs.existsSync(allureResultsDir)) {
            fs.rmSync(allureResultsDir, { recursive: true, force: true });
            console.log('Cleared previous Allure results.');
        }
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    before: async function() {
        // Activate the app before all tests start
        await browser.activateApp('com.krishivaas');
        console.log('App activated successfully');
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
            addStep(`Test failed at step: ${test.title}`, { error: error.message }, 'failed');
            console.error(`Test failed: ${test.title}`);
        } else {
            console.log(`Test passed: ${test.title}`);
        }
    },
    onComplete: function() {
        // Use a shell command to terminate the app
        const { exec } = require('child_process');
        exec('adb shell am force-stop com.krishivaas', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error terminating app: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return;
            }
            console.log('App terminated successfully');
        });
    }
};
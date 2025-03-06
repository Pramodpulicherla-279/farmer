exports.config = {
    runner: 'local',
    port: 57090, // Match the Appium service port
    specs: [
        './test/specs/onboardingTest.js',
        './test/specs/popTest.js'
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
    onComplete: function(exitCode, config, capabilities, results) {
        // Check if results is defined
        if (results && results.specs) {
            const specs = config.specs.map(spec => spec.split('/').pop());
            const executedSpecs = results.specs.map(spec => spec.split('/').pop());
            const notExecutedSpecs = specs.filter(spec => !executedSpecs.includes(spec));

            if (notExecutedSpecs.length > 0) {
                notExecutedSpecs.forEach(spec => {
                    addStep(`Spec not executed: ${spec}`, {}, 'failed');
                });
            }
        } else {
            console.error('Results object is undefined or does not contain specs.');
        }

        // Terminate the app after all specs are done
        browser.terminateApp('com.krishivaas');
        console.log('App terminated successfully');
    }
};
exports.config = {
    runner: 'local',
    port: 57090, // Match the Appium service port
    specs: [
        './test/specs/*.e2e.js',
        './test/specs/*.pop.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'iqoo',
        'appium:appPackage': 'com.krishivaas',
        'appium:appActivity': 'com.krishivaas.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 30000
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}
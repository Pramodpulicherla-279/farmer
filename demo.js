const webdriverio = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'iqoo',
  'appium:appPackage': 'com.krishivaas',
  'appium:appActivity': 'com.krishivaas.MainActivity',
  'appium:automationName': 'UiAutomator2',
  'appium:newCommandTimeout': 30000
};

async function findAndClick(browser, selector, timeout = 7000) {
  const element = await browser.$(selector);
  if (await element.isExisting()) {
    console.log(`Element found: ${selector}`);
    await element.waitForExist({ timeout });
    await element.click();
  } else {
    console.error(`Element not found: ${selector}`);
  }
}

async function allowPermissions(browser) {
  await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
  await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
  await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
  await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
  await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
}

async function login(browser) {
  const element5 = await browser.$('//android.widget.EditText[@text="_____ _____"]');
  if (await element5.isExisting()) {
    console.log('Element 5 found using XPath');
    await element5.waitForExist({ timeout: 7000 });
    await element5.click();
    await element5.setValue('7660852538');
  } else {
    console.error('Element 5 not found using XPath');
  }

  await findAndClick(browser, '//android.widget.TextView[@text="Login"]');
  await new Promise(resolve => setTimeout(resolve, 50000));
}

async function submitForm(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]');
  await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');
}

async function addFarm(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]');//add farm button
  await findAndClick(browser, '//android.widget.TextView[@text="Select or Search Crop"]');//select crop dropdown
  await findAndClick(browser, '//android.widget.TextView[@text="Bengal Gram"]');//selecting crop in add crop
  await findAndClick(browser, '//android.widget.TextView[@text="Select Crop Duration"]');//crop duration dropdown
  await findAndClick(browser, '//android.widget.TextView[@text="Short (90 Days)"]');//short duration option in dropdown
  await findAndClick(browser, '//android.widget.TextView[@text="Select Sowing Type"]');//sowing type dropdown
  await findAndClick(browser, '//android.widget.TextView[@text="Direct Sowing"]');//direct sowing option in dropdown
  await findAndClick(browser, '(//android.widget.TextView[@text="--/--/----"])[1]');//sowing date field
  await findAndClick(browser, '//android.view.View[@content-desc="07 February 2025"]');//selecting date in calendar
  await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');//ok button in calendar
  await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');//submit button in add crop
}

async function editFarm(browser) {
  await findAndClick(browser, '//android.widget.ImageView');
  await new Promise(resolve => setTimeout(resolve, 30000));//waiting for 30 seconds
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
  await findAndClick(browser, '//android.widget.TextView[@text="Edit Farm"]');//edit farm button in three dots

  const element24 = await browser.$('//android.widget.EditText[@text="0"]');//acre field in edit farm
  if (await element24.isExisting()) {
    console.log('Element 24 found');
    await element24.waitForExist({ timeout: 7000 });
    await element24.click();
    await element24.setValue('5');
  } else {
    console.error('Element 24 not found');
  }

  await findAndClick(browser, '//android.widget.TextView[@text="Update"]');//update button in edit farm
  await new Promise(resolve => setTimeout(resolve, 30000));//waiting for 30 seconds
}

async function editCrop(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
  await findAndClick(browser, '//android.widget.TextView[@text="Edit Crop"]');//edit crop button in three dots
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[5]');
  await findAndClick(browser, '//android.widget.TextView[@text="Transplanted"]');//transplanted option in dropdown in edit crop
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[6]');
  await findAndClick(browser, '//android.view.View[@content-desc="15 March 2025"]');//selecting date in calendar
  await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');//ok button in calendar
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[7]');
  await findAndClick(browser, '//android.view.View[@content-desc="01 March 2025"]');//selecting date in calendar
  await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');//ok button in calendar
  await findAndClick(browser, '//android.widget.TextView[@text="Update"]');//update button in edit crop
}

async function runTest() {
  try {
    console.log('Starting test...');
    console.log('Capabilities:', capabilities);

    const browser = await webdriverio.remote({
      hostname: 'localhost',
      port: 4723,
      path: '/',
      capabilities
    });

    console.log('Session started successfully');
    await browser.activateApp('com.krishivaas');

    await allowPermissions(browser);
    await login(browser);
    await submitForm(browser);
    await addFarm(browser);
    await editFarm(browser);
    await editCrop(browser);

    console.log('Test completed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

runTest();
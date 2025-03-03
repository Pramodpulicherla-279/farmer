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

    await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    await findAndClick(browser, 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');

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
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]');
    await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]');
    await findAndClick(browser, '//android.widget.TextView[@text="Select or Search Crop"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Bengal Gram"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Select Crop Duration"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Short (90 Days)"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Select Sowing Type"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Direct Sowing"]');
    await findAndClick(browser, '(//android.widget.TextView[@text="--/--/----"])[1]');
    await findAndClick(browser, '//android.view.View[@content-desc="07 February 2025"]');
    await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Submit"]'); //submit in add crop
    await findAndClick(browser, '//android.widget.TextView[@text="Draw on map"]');
    // await findAndClick(browser, '//android.widget.ImageView'); // close icon in boundary popup

    // Tap on screen to form boundary on map using provided coordinates
    const coordinates = [
      { x: 17.440366, y: 78.399144 },
      { x: 17.440427, y: 78.399320 },
      { x: 17.440253, y: 78.399393 },
      { x: 17.440164, y: 78.399211 },
      { x: 17.440366, y: 78.399144 }
    ];

    for (const coord of coordinates) {
      await browser.performActions([
        {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: coord.x, y: coord.y },
            { type: 'pointerDown' },
            { type: 'pointerUp' },
            { type: 'pause', duration: 500 }
          ],
        },
      ]);
    }

    await findAndClick(browser, '//android.widget.Button[@text="Save & Approve"]');
    await new Promise(resolve => setTimeout(resolve, 30000));
    await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
    await findAndClick(browser, '//android.widget.TextView[@text="Edit Farm"]');
    
    const element24 = await browser.$('//android.widget.EditText[@text="0"]');
    if (await element24.isExisting()) {
      console.log('Element 24 found');
      await element24.waitForExist({ timeout: 7000 });
      await element24.click();
      await element24.setValue('5');
    } else {
      console.error('Element 24 not found');
    }

    await findAndClick(browser, '//android.widget.TextView[@text="Update"]');
    await new Promise(resolve => setTimeout(resolve, 30000));
    await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
    await findAndClick(browser, '//android.widget.TextView[@text="Edit Crop"]');
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[5]');
    await findAndClick(browser, '//android.widget.TextView[@text="Transplanted"]');
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[6]');
    await findAndClick(browser, '//android.view.View[@content-desc="10 February 2025"]');
    await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');
    await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[7]');
    await findAndClick(browser, '//android.view.View[@content-desc="01 February 2025"]');
    await findAndClick(browser, '//android.widget.Button[@resource-id="android:id/button1"]');
    await findAndClick(browser, '//android.widget.TextView[@text="Update"]');

    console.log('Test completed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

runTest();
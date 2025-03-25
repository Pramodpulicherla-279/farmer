const { addStep } = require('@wdio/allure-reporter').default;

async function findAndClick(browser, selector, timeout = 7000) {
    const element = await browser.$(selector);
    if (await element.isExisting()) {
      console.log(`Element found: ${selector}`);
      await element.waitForExist({ timeout });
      await element.click();
    } else {
      console.error(`Element not found: ${selector}`);
      addStep(`Element not found: ${selector}`, {}, 'failed');
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
  await new Promise(resolve => setTimeout(resolve, 80000));
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]');//Clicking on the screen to dissappear the keyword
  await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');
}

module.exports = {
    allowPermissions,
    login,
    // other exports...
};
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
//pop calendar iconn in my farms
async function popCalendar(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup[1]');//pop calendar icon in my farms
}
//pop event
async function popEvent(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup');
}
//camera icon in pop
async function cameraIcon(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ImageView');
}
//photo icon in camera
async function photoIcon(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');
}
//save button of pop event
async function saveButton(browser) {
    await findAndClick(browser, '//android.widget.TextView[@text="Save"]');
}
//video icon for start and stop in camera
async function videoIcon(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ImageView');
}
//close icon in camera
async function closeIcon(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]');
}
//delete Icon in pop
async function deleteIcon1(browser) {
  await findAndClick(browser, '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
}
//main audio for start and stop
async function mainAudio(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ImageView');
}
//general remarks text box
async function generalRemarks(browser, text) {
    const element = await browser.$('//android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText');
    if (await element.isExisting()) {
      console.log('General remarks text box found');
      await element.waitForExist({ timeout: 7000 });
      await element.click();
      await element.setValue(text);
    } else {
      console.error('General remarks text box not found');
    }
}
//general remarks audio for start and stop
async function generalRemarksAudio(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.ImageView');
}
//delete icon of general remark audio
async function deleteIcon2(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]');
}
//submit button
async function submitBtnPop(browser) {
  await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');
}
//cancel button
async function cancelBtnPop(browser) {
  await findAndClick(browser, '//android.widget.TextView[@text="Cancel"]');
}
module.exports = {
    findAndClick,
    popCalendar,
    popEvent,
    cameraIcon,
    photoIcon,
    saveButton,
    videoIcon,
    closeIcon,
    deleteIcon1,
    mainAudio,
    generalRemarks,
    generalRemarksAudio,
    deleteIcon2,
    cancelBtnPop,
    submitBtnPop
}
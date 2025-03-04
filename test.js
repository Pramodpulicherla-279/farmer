// filepath: /c:/Users/Pramo/farmer/test.js
const webdriverio = require('webdriverio');
const { expect } = require('chai');

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
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]');//Clicking on the screen to dissappear the keyword
  await findAndClick(browser, '//android.widget.TextView[@text="Submit"]');
}

async function addFarmIcon(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]');//add farm icon in my farms
}
//my farms button in dashboard
async function myfarmsButton(browser) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');//my farms button in dashboard
}
//add farm button in my farms
async function addFarm(browser) {
  await new Promise(resolve => setTimeout(resolve, 10000));
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]');//submit button in add farm
}
//three dots of crop in farms
async function threeDots1(browser){
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
}
//three dots of without crop in farms
async function threeDots2(browser){
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
}
//close icon in add boundary popup
async function closeIcon(browser){
  await findAndClick(browser, '//android.widget.ImageView');
}
//skip crop button in add crop
async function skipCrop(browser){
  await findAndClick(browser, '//android.widget.TextView[@text="Skip"]');
}
//cancel button in add crop
async function cancelButton(browser){
  await findAndClick(browser, '//android.widget.TextView[@text="Cancel"]');
}
//add crop button in three dots
async function addCropButton(browser){
  await findAndClick(browser, '//android.widget.TextView[@text="Add Crop"]')
}

async function addCrop(browser) {
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

async function tapOnScreen(browser, coordinates) {
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');//draw on map button in add boundary popup
  await new Promise(resolve => setTimeout(resolve, 10000));
  for (let { x, y } of coordinates) {
      await browser.performActions([
          {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                  { type: "pointerMove", duration: 0, x, y },
                  { type: "pointerDown", button: 0 },
                  { type: "pointerUp", button: 0 }
              ]
          }
      ]);
  }
  await browser.releaseActions(); // Important: Release after performing actions
  await findAndClick(browser, '//android.widget.Button[@text="Save & Approve"]');//save and approve button in draw on map screen
}

async function editFarm(browser) {
  await new Promise(resolve => setTimeout(resolve, 30000));//waiting for 30 seconds
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
  await findAndClick(browser, '//android.widget.TextView[@text="Edit Farm"]');//edit farm button in three dots
  await new Promise(resolve => setTimeout(resolve, 5000));//waiting for 30 seconds
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

async function editBoundary(browser) {
  await findAndClick(browser, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');//three dots in farms
  await findAndClick(browser, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]');  //edit boundary in three dots
  await new Promise(resolve => setTimeout(resolve, 10000));//waiting for 30 seconds
  // Tap on specific coordinates (example: x=500, y=500)
  await browser.performActions([
    {
      type: "pointer",
      id: "finger1",
      parameters: { pointerType: "touch" },
      actions: [
        { type: "pointerMove", duration: 0, x: 390, y: 760 },
        { type: "pointerDown", button: 0 },
        { type: "pointerUp", button: 0 }
      ]
    }
  ]);

  await findAndClick(browser, '//android.widget.TextView[@text="Delete"]');//delete icon in edit boundary
  // Tap on specific coordinates (example: x=500, y=500)
  await browser.performActions([
    {
      type: "pointer",
      id: "finger1",
      parameters: { pointerType: "touch" },
      actions: [
        { type: "pointerMove", duration: 0, x: 690, y: 760 },
        { type: "pointerDown", button: 0 },
        { type: "pointerUp", button: 0 }
      ]
    }
  ]);
  
  await findAndClick(browser, '//android.widget.TextView[@text="Delete"]');//delete icon in edit boundary
  for (let { x, y } of coordinates) {
    await browser.performActions([
        {
            type: "pointer",
            id: "finger1",
            parameters: { pointerType: "touch" },
            actions: [
                { type: "pointerMove", duration: 0, x, y },
                { type: "pointerDown", button: 0 },
                { type: "pointerUp", button: 0 }
            ]
        }
    ]);
  }

  await findAndClick(browser, '//android.widget.Button[@text="Save & Approve"]');//save and approve button in draw on map screen
  await browser.releaseActions(); // Important: Release after performing actions
}

describe('REGULAR FARMER APP TEST REPORT', function() {
  this.timeout(600000); // Set timeout to 10 minutes

  let browser;

  before(async function() {
    browser = await webdriverio.remote({
      hostname: 'localhost',
      port: 4723,
      path: '/',
      capabilities
    });
    await browser.activateApp('com.krishivaas');
  });

  describe('TC-1 : Permissions > Login', function() {
    it('Allow Permissions', async function() {
      await allowPermissions(browser);
    });

    it('Login', async function() {
      await login(browser);
    });
  });

  describe('TC-2 : My farms > Add farm > Add crop > Add Boundary', function() {
    it('My Farms', async function() {
      await myfarmsButton(browser);
    });

    it('Add Farm Icon', async function() {
      await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
      await addFarm(browser);
    });
  
    it('Add Crop', async function() {
      await addCrop(browser);
    });
  
    it('Add Boundary - Draw On Map', async function() {
      const coordinates = [
        { x: 390, y: 760 },  // Top-left corner of the box
        { x: 690, y: 760 },  // Top-right corner of the box
        { x: 690, y: 1160 }, // Bottom-right corner of the box
        { x: 390, y: 1160 }, // Bottom-left corner of the box
        { x: 390, y: 760 },   // Closing the box (back to top-left)
        { x: 390, y: 760 }   // Closing the box (back to top-left)
  
      ];
      await tapOnScreen(browser, coordinates);
    });
  });

  describe('TC-3 : Add farm > Add crop > Add Boundary > Edit farm > Edit Crop', function() {
    it('Add Farm Icon', async function() {
      await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
      await addFarm(browser);
    });
  
    it('Add Crop', async function() {
      await addCrop(browser);
    });
  
    it('Add Boundary - Draw On Map', async function() {
      const coordinates = [
        { x: 390, y: 760 },  // Top-left corner of the box
        { x: 690, y: 760 },  // Top-right corner of the box
        { x: 690, y: 1160 }, // Bottom-right corner of the box
        { x: 390, y: 1160 }, // Bottom-left corner of the box
        { x: 390, y: 760 },   // Closing the box (back to top-left)
        { x: 390, y: 760 }   // Closing the box (back to top-left)
  
      ];
      await tapOnScreen(browser, coordinates);
    });
  
    it('Edit Farm', async function() {
      await editFarm(browser);
    });
  
    it('Edit Crop', async function() {
      await editCrop(browser);
    });
  });

  describe('TC-4 : Plus icon > Add farm > Skip crop > Add Boundary', function() {
    it('Add Farm Icon', async function() {
      await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
      await addFarm(browser);
    });
    it('Skip Crop', async function() {
      await skipCrop(browser);
    });
    it('Add Boundary - Draw On Map', async function() {
      const coordinates = [
        { x: 390, y: 760 },  // Top-left corner of the box
        { x: 690, y: 760 },  // Top-right corner of the box
        { x: 690, y: 1160 }, // Bottom-right corner of the box
        { x: 390, y: 1160 }, // Bottom-left corner of the box
        { x: 390, y: 760 },   // Closing the box (back to top-left)
        { x: 390, y: 760 }   // Closing the box (back to top-left)
  
      ];
      await tapOnScreen(browser, coordinates);
    });
  });
  describe('TC-5 : Plus Icon > Add Farm', function() {
    it('Add Farm Icon', async function() {
      await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
      await addFarm(browser);
    });
    it('cancel button', async function() {
      await cancelButton(browser);
    });
  });

  describe('TC-6 : Three dots > Add crop > Add Boundary', function() {
    it('Three Dots', async function() {
      await threeDots2(browser);
    });
    it('Add Crop Button', async function() {
      await addCropButton(browser);
    });
    it('Add Crop', async function() {
      await addCrop(browser);
    });
    it('Add Boundary - Draw On Map', async function() {
      const coordinates = [
        { x: 390, y: 760 },  // Top-left corner of the box
        { x: 690, y: 760 },  // Top-right corner of the box
        { x: 690, y: 1160 }, // Bottom-right corner of the box
        { x: 390, y: 1160 }, // Bottom-left corner of the box
        { x: 390, y: 760 },   // Closing the box (back to top-left)
        { x: 390, y: 760 }   // Closing the box (back to top-left)
  
      ];
      await tapOnScreen(browser, coordinates);
    });
  });
  



  // it('Edit Boundary', async function() {
  //   await editBoundary(browser);
  // });


});
//
//

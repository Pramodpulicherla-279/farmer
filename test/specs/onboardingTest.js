const { addStep } = require('@wdio/allure-reporter').default;
const { findAndClick, allowPermissions, login, addFarmIcon, myfarmsButton, addFarm, threeDots1, threeDots2, closeIcon, skipCrop, cancelButton, addCropButton, addCrop, tapOnScreen, editFarm, editCrop, editBoundary, addBoundaryButton, androidBack, addFarmButton, popCalendar } = require('../pageobjects/test');


// before(async function() {
//     this.timeout(600000); // Set timeout to 10 minutes
//     await browser.activateApp('com.krishivaas');
//     console.log('App activated successfully');
// });
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
describe('TC-3 : Plus Icon > Add farm > Add crop > Add Boundary > Edit farm > Edit Crop', function() {
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
    it('Three Dots', async function() {
        await threeDots1(browser);
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
describe('TC-7 : Add farm > cancel crop > Three dots > Skip Crop > Add boundary', function() {
    it('Add farm Icon', async function() {
        await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('cancel button', async function() {
        await cancelButton(browser);
    });
    it('Three Dots', async function() {
        await threeDots2(browser);
    });
    it('Add Crop', async function() {
        await addCropButton(browser);
    });
    //need to add time
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
describe('TC-8 : Add farm > Cancel crop > Three dots > Add crop > Skip Boundary', function() {
    it('Add farm Icon', async function() {
        await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('cancel button', async function() {
        await cancelButton(browser);
    });
    it('Three Dots', async function() {
        await threeDots2(browser);
    });
    it('Add Crop Button', async function() {
        await addCropButton(browser);
    });
    it('Add Crop', async function() {
        await addCrop(browser);
    });
    it('close icon', async function() {
        await closeIcon(browser);
    });
});
describe('TC-9 : Add farm > cancel crop > Three dots > Add boundary', function() {
    it('Add farm Icon', async function() {
        await addFarmIcon(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('cancel button', async function() {
        await cancelButton(browser);
    });
    it('Three Dots', async function() {
        await threeDots2(browser);
    });
    it('Add Boundary - Draw On Map', async function() {
        await addBoundaryButton(browser);
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
describe('TC-10 : Dashboard > Add farm', function() {
    it('Android back', async function() {
        await androidBack(browser);
    });
    it('Add farm button in dashboard', async function() {
        await addFarmButton(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('Cancel crop', async function() {
        await cancelButton(browser);
    });
});
describe('TC-11 : Dashboard > Add farm > Add crop > Add Boundary', function() {
    it('Android back', async function() {
        await androidBack(browser);
    });
    it('Add farm button in dashboard', async function() {
        await addFarmButton(browser);
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
describe('TC-12 : Dashboard > Add farm > Skip crop > Add Boundary > Edit farm > Add Crop > Edit Crop', function() {
    it('Android back', async function() {
        await androidBack(browser);
    });
    it('Add farm button in dashboard', async function() {
        await addFarmButton(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('Skip crop', async function() {
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
    it('three dots', async function() {
        await threeDots2(browser);
    });
    it('Edit Farm', async function() {
        await editFarm(browser);
    });
    it('three dots', async function() {
        await threeDots2(browser);
    });
    it('add crop button', async function() {
        await addCropButton(browser);
    });
    it('Add Crop', async function() {
        await addCrop(browser);
    });
    it('Edit Crop', async function() {
        await editCrop(browser);
    });
});
describe('TC-13 : Dashboard > Add farm > Add Crop > Skip Boundary > Three dots > Add boundary', function() {
    it('Android back', async function() {
        await androidBack(browser);
    });
    it('Add farm button in dashboard', async function() {
        await addFarmButton(browser);
    });
    it('Add Farm', async function() {
        await addFarm(browser);
    });
    it('Add Crop', async function() {
        await addCrop(browser);
    });
    it('close icon', async function() {
        await closeIcon(browser);
    });
    it('Three Dots', async function() {
        await threeDots1(browser);
    });
    it('Add Boundary', async function() {
        await addBoundaryButton(browser);
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
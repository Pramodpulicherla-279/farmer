const { addStep } = require('@wdio/allure-reporter').default;
const { findAndClick, allowPermissions, login } = require('../pageobjects/login');

// let state = {};

describe('TC-1 : Permissions > Login', function() {
    it('Allow Permissions', async function() {
        await allowPermissions(browser);
    });
    it('Login', async function() {
        await login(browser);
    });
});
// describe('TC-2 : My farms > Add farm > Add crop > Add Boundary', function() {
//     it('My Farms', async function() {
//         await myfarmsButton(browser);
//     });
//     it('Add Farm Icon', async function() {
//         await addFarmIcon(browser);
//     });
//     it('Add Farm', async function() {
//         await addFarm(browser);
//     });
//     it('Add Crop', async function() {
//         await addCrop(browser);
//     });
//     it('Add Boundary - Draw On Map', async function() {
//         const coordinates = [
//             { x: 390, y: 760 },  // Top-left corner of the box
//             { x: 690, y: 760 },  // Top-right corner of the box
//             { x: 690, y: 1160 }, // Bottom-right corner of the box
//             { x: 390, y: 1160 }, // Bottom-left corner of the box
//             { x: 390, y: 760 },   // Closing the box (back to top-left)
//             { x: 390, y: 760 }   // Closing the box (back to top-left)
//         ];
//         await tapOnScreen(browser, coordinates);
//     });
// });

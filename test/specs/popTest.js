const { findAndClick, popCalendar, popEvent, cameraIcon, photoIcon, saveButton, videoIcon, closeIcon, deleteIcon1, mainAudio, generalRemarks, generalRemarksAudio, deleteIcon2, cancelBtnPop, submitBtnPop } = require('../pageobjects/pop');
const { addStep } = require('@wdio/allure-reporter').default;

let state = {};

beforeEach(async function() {
    if (state.loggedIn) {
        console.log('Already logged in, continuing from previous state');
    } else {
        await login(browser);
        state.loggedIn = true;
    }
});

async function logStep(action, browser, ...args) {
    addStep(`Request: ${action.name}`, { args }, 'info');
    await action(browser, ...args);
    addStep(`Response: ${action.name}`, {}, 'info');
}

describe('TC-14 : POP calendar icon > pop event > photo > video > audio > general remark text > general remarks audio', function() {
    it('should open the POP calendar', async function() {
        await logStep(popCalendar, browser);
    });

    it('should open the POP event', async function() {
        await logStep(popEvent, browser);
    });

    it('should open the camera', async function() {
        await logStep(cameraIcon, browser);
    });

    it('should take a photo', async function() {
        await logStep(photoIcon, browser);
    });

    it('should save the photo', async function() {
        await logStep(saveButton, browser);
    });

    it('should open the camera again', async function() {
        await logStep(cameraIcon, browser);
    });

    it('should record a video', async function() {
        await logStep(videoIcon, browser);
    });

    it('should stop recording the video', async function() {
        await logStep(videoIcon, browser);
    });

    it('should record the main audio', async function() {
        await logStep(mainAudio, browser);
    });

    it('should stop recording the main audio', async function() {
        await logStep(mainAudio, browser);
    });

    it('should add a general remark', async function() {
        await logStep(generalRemarks, browser, 'This is a general remark.');
    });

    it('should record the general remarks audio', async function() {
        await logStep(generalRemarksAudio, browser);
    });

    it('should stop recording the general remarks audio', async function() {
        await logStep(generalRemarksAudio, browser);
    });

    it('should submit the POP event', async function() {
        await logStep(submitBtnPop, browser);
    });
});

afterEach(async function() {
    // Save the state if needed
});
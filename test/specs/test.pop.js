const { findAndClick, popCalendar, popEvent, cameraIcon, photoIcon, saveButton, videoIcon, closeIcon, deleteIcon1, mainAudio, generalRemarks, generalRemarksAudio, deleteIcon2, cancelBtnPop, submitBtnPop } = require('../pageobjects/pop');

describe('TC-14 : POP calendar icon > pop event > photo > video > audio > general remark text > general remarks audio', function() {
    it('should submit a pop event', async function() {
        await popCalendar(browser);
        await popEvent(browser);
        await cameraIcon(browser);
        await photoIcon(browser);
        await saveButton(browser);
        await cameraIcon(browser);
        await videoIcon(browser);
        await videoIcon(browser);
        await mainAudio(browser);
        await mainAudio(browser);
        await generalRemarks(browser, 'This is a general remark.');
        await generalRemarksAudio(browser);
        await generalRemarksAudio(browser);
        await submitBtnPop(browser);
    });
});

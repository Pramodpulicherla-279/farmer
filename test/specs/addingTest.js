const {
    findAndClick,
    // allowPermissions,
    // login,
    addFarmIcon,
    myfarmsButton,
    addFarm,
    threeDots1,
    threeDots2,
    closeIcon,
    skipCrop,
    cancelButton,
    addCropButton,
    addCrop,
    tapOnScreen,
    editFarm,
    editCrop,
    editBoundary,
    addBoundaryButton,
    androidBack,
    addFarmButton,
    selectCrop,
    selectCropInAddCrop,
    cropDurationDropdown,
    shortDurationOption,
    sowingTypeDropdown,
    directSowingOption,
    sowingDateField,
    selectingDateInCalendar,
    okButtonInCalendar,
    submitButtonInAddCrop,
    editCropButton,
    sowingTypeDropdownInEditCrop,
    transplantedOption,
    transplantedDateField,
    selectingDateInCalendarInEditCrop,
    okButtonInCalendarInEditCrop,
    updateButtonInEditCrop,
    longDurationOption
  

} = require("../pageobjects/test");

let state = {};

describe("TC-2", function () {
  it("001 - plus icon > add farm > add crop, direct sowing, short, without dates > Add Boundary > overview > 002 - edit crop, direct sowing, long, without dates > overview > 003 - edit crop, short, direct sowing, with dates > Overview > 004 - Edit farm > Edit Crop, short, transplanted,  with dates > Overview > 005 - edit crop, long, transplanted,  with dates > overview > 006 - edit crop, long, direct sowing ,  with dates > overview", async function () {
    //001 plus icon > add farm > add crop, direct sowing, short, without dates > Add Boundary > overview
    await myfarmsButton(browser);
    await addFarmIcon(browser);
    await addFarm(browser);
    await selectCrop(browser);
    await selectCropInAddCrop(browser);
    await cropDurationDropdown(browser);
    await shortDurationOption(browser);
    await submitButtonInAddCrop(browser);
    await addBoundaryButton(browser);
    const coordinates = [
      { x: 390, y: 760 }, // Top-left corner of the box
      { x: 690, y: 760 }, // Top-right corner of the box
      { x: 690, y: 1160 }, // Bottom-right corner of the box
      { x: 390, y: 1160 }, // Bottom-left corner of the box
      { x: 390, y: 760 }, // Closing the box (back to top-left)
      { x: 390, y: 760 }, // Closing the box (back to top-left)
    ];
    await tapOnScreen(browser, coordinates);
    //overview
    //002 - edit crop, direct sowing, long, without dates > overview
    await threeDots1(browser);
    await editCropButton(browser);
    //crop duration long
    await cropDurationDropdown(browser);
    await longDurationOption(browser);
    await updateButtonInEditCrop(browser);
    //overview
    //003 - edit crop, short, direct sowing, with dates > Overview
    await threeDots1(browser);
    await editCropButton(browser);
    //short
    await cropDurationDropdown(browser);
    await shortDurationOption(browser);
    //dates
    await sowingDateField(browser);
    await selectingDateInCalendar(browser);
    //update
    await updateButtonInEditCrop(browser);
    //overview
    //004 - Edit farm > Edit Crop, short, transplanted,  with dates > Overview
    await threeDots1(browser);
    await editFarm(browser);
    await editCropButton(browser);
    //short
    //transplanted
    await sowingTypeDropdownInEditCrop(browser);
    await transplantedOption(browser);
    //dates
    await transplantedDateField(browser);
    await selectingDateInCalendarInEditCrop(browser);
    await okButtonInCalendarInEditCrop(browser);
    await updateButtonInEditCrop(browser);
    //overview
    //005 - edit crop, long, transplanted,  with dates > overview
    await threeDots1(browser);
    await editCropButton(browser);
    //long
    await cropDurationDropdown(browser);
    await longDurationOption(browser);
    await sowingTypeDropdownInEditCrop(browser);
    await transplantedOption(browser);
    await transplantedDateField(browser);
    await selectingDateInCalendarInEditCrop(browser);
    await okButtonInCalendarInEditCrop(browser);
    await updateButtonInEditCrop(browser);
    //overview
    //006 - edit crop, long, direct sowing ,  with dates > overview
    await threeDots1(browser);
    await editCropButton(browser);
    //long
    await cropDurationDropdown(browser);
    await longDurationOption(browser);
    //direct sowing
    await sowingTypeDropdownInEditCrop(browser);
    await directSowingOption(browser);
    //dates
    await sowingDateField(browser);
    await selectingDateInCalendar(browser);
    await updateButtonInEditCrop(browser);
    //overview
  });
});

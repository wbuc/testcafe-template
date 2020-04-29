import { t, Selector } from "testcafe";


const MxSelector = '.mx-name-'


// TEXTFIELD
//
export const setTextField = async (name, value, condition = null) => {
    const element = Selector(`${MxSelector + name} input`)

    if (value === '') {
        await t.click(element)
            .pressKey('ctrl+a delete');
    }
    else {

        if (!condition) {
            await t.typeText(element, value);
        }
        else {
            await t.expect(element.value)
                .eql(condition.before, `${name} before value`)
                .typeText(element, value)
                .expect(element.value)
                .eql(value, `${name} after value`);
        }
    }
}
// TEXTAREA
//
export const setTextArea = async (name, value, condition = null) => {
    const element = Selector(`${MxSelector + name} textarea`)

    if (value === '') {
        await t.click(element)
            .pressKey('ctrl+a delete');
    }
    else {
        if (!condition) {
            await t.typeText(element, value);
        }
        else {
            await t.expect(element.value)
                .eql(condition.before, `${name} before value`)
                .typeText(element, value)
                .expect(element.value)
                .eql(value, `${name} after value`);
        }
    }
}
// RADIO 
//
export const selectRadioButton = async (name, value, condition = null) => {

    if (!condition) {
        await t.click(MxSelector + name + " input[value=\"" + value + "\"]");
    }
    // Need to include the else, mendix has weird way of showing radio.

}
// BUTTON
//
export const selectButton = async (name, wait = 0) => {
    const element = Selector(`${MxSelector + name}`)
    await t.click(element)
        .wait(wait);
}
// LIST ITEM
//
export const selectListItem = async (name, index = 1) => {
    await t.click(`${MxSelector + name} li:nth-child(${index})`)

}
// GRID ITEM
//
export const selectGridItem = async (name, value) => {
    const _grid = Selector(`${MxSelector + name} tbody`)
    const _gridLine = _grid.find('tr > td')

    await t.click(_gridLine.withText(value))
}
// DROPDOWN 
//
export const selectDropdown = async (name, value) => {
    const _dropdown = Selector(`${MxSelector + name} select`)
    const _ddOption = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_ddOption.withText(value))
}

import { t, Selector } from "testcafe";

const MxSelector = '.mx-name-'

const controlTypes = {
    textbox: 'textbox',
    textarea: 'textarea',
    dropdown: 'dropdown',
    radiobutton: 'radiobutton',
    button: 'button',
    listitem: 'listitem',
    griditem: 'griditem'
}

const controlRepository = {};

const expectEqual = async (name, value, message = '') => {
    const currentControl = controlRepository[name]
    const assertMessage = `${name + (message ? ' : ' + message : ' ')}`;

    if (currentControl.type === controlTypes.textbox) {
        await t.expect(currentControl.element.value).eql(value, assertMessage);
    }
    if (currentControl.type === controlTypes.textarea) {
        await t.expect(currentControl.element.value).eql(value, assertMessage);
    }

}
const expectContains = async () => {
    const currentControl = controlRepository[name]
    const assertMessage = `${name + (message ? ' : ' + message : ' ')}`;
}


// NAV LINK
//
const selectNavLink = async (index) => {
    await t.click(`.navbar-nav>li:nth-child(${index})`);
}
// TEXTFIELD
//
const setTextBox = async (name, value, condition = null) => {
    const element = Selector(`${MxSelector + name} input`)

    // set the repo so that this control can be used later with asserts.
    controlRepository[name] = { type: controlTypes.textbox, element: element };

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
const setTextArea = async (name, value, condition = null) => {
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
const selectRadioButton = async (name, value, condition = null) => {

    if (!condition) {
        await t.click(MxSelector + name + " input[value=\"" + value + "\"]");
    }
    // Need to include the else, mendix has weird way of showing radio.

}
// BUTTON
//
const selectButton = async (name, wait = 0) => {
    const element = Selector(`${MxSelector + name} `)
    await t.click(element)
        .wait(wait);
}
// LIST ITEM
//
const selectListItem = async (name, index = 1) => {
    await t.click(`${MxSelector + name} li:nth-child(${index})`)
}
// GRID ITEM
//
const selectGridItem = async (name, value) => {
    const _grid = Selector(`${MxSelector + name} tbody`)
    const _gridLine = _grid.find('tr > td')

    await t.click(_gridLine.withText(value))
}
// DROPDOWN 
//
const selectDropdown = async (name, value, wait = 0) => {
    const _dropdown = Selector(`${MxSelector + name} select`)
    const _ddOption = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_ddOption.withText(value)).wait(wait);
}
// CONFIRM DIALOG
//
const confirmDialog = async () => {
    const element = Selector(`.modal-dialog.mx-dialog .btn-primary`)
    await t.click(element);
}


export default {
    setTextBox,
    setTextArea,
    selectRadioButton,
    selectDropdown,
    selectButton,
    selectListItem,
    selectGridItem,
    selectNavLink,
    confirmDialog,
    expectEqual,
    expectContains
}
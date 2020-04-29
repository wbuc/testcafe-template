import { t, Selector } from "testcafe";


const MxSelector = '.mx-name-'

// TEXTFIELD
//
export const setTextField = async (name, value, wait = 0) => {
    const element = Selector(`${MxSelector + name} input`)
    await t.typeText(element, value)
        .wait(wait);
}
// TEXTAREA
//
export const setTextArea = async (name, value, wait = 0) => {
    const element = Selector(`${MxSelector + name} textarea`)
    await t.typeText(element, value)
        .wait(wait);
}
// RADIO 
//
export const selectRadioButton = async (name, value, wait = 0) => {
    await t.click(MxSelector + name + " input[value=\"" + value + "\"]")
        .wait(wait);

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
export const selectListItem = async (name, index = 1, wait = 0) => {
    await t.click(`${MxSelector + name} li:nth-child(${index})`)
        .wait(wait);

}
// GRID ITEM
//
export const selectGridItem = async (name, value, wait = 0) => {
    const _grid = Selector(`${MxSelector + name} tbody`)
    const _gridLine = _grid.find('tr > td')

    await t.click(_gridLine.withText(value))
        .wait(wait);
}
// DROPDOWN 
//
export const selectDropdown = async (name, value, wait = 0) => {
    const _dropdown = Selector(`${MxSelector + name} select`)
    const _ddOption = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_ddOption.withText(value))
        .wait(wait);
}

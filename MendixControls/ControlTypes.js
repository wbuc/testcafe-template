import { t, Selector } from "testcafe";


// TEXTFIELD
//
export const setTextField = async (name, value, wait = 100) => {
    const element = Selector(`.mx-name-${name} input`)
    await t.typeText(element, value)
        .wait(wait);
}
// TEXTAREA
//
export const setTextArea = async (name, value, wait = 100) => {
    const element = Selector(`.mx-name-${name} textarea`)
    await t.typeText(element, value)
        .wait(wait);
}
// RADIO 
//
export const selectRadioButton = async (name, value, wait = 100) => {
    await t.click(".mx-name-" + name + " input[value=\"" + value + "\"]")
        .wait(wait);

}
// BUTTON
//
export const selectButton = async (name, wait = 100) => {
    const element = Selector(`.mx-name-${name}`)
    await t.click(element)
        .wait(wait);
}
// LIST ITEM
//
export const selectListItem = async (name, index = 1, wait = 100) => {
    await t.click(`.mx-name-${name} li:nth-child(${index})`)
        .wait(wait);

}
// GRID ITEM
//
export const selectGridItem = async (name, value, wait = 100) => {
    const _grid = Selector(`.mx-name-${name} tbody`)
    const _gridLine = _grid.find('tr > td')

    await t.click(_gridLine.withText(value))
        .wait(wait);
}
// DROPDOWN 
//
export const selectDropdown = async (name, value, wait = 100) => {
    const _dropdown = Selector(`.mx-name-${name} select`)
    const _ddOption = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_ddOption.withText(value))
        .wait(wait);
}

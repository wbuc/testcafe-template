
import {
    setTextField,
    setTextArea,
    selectRadioButton,
    selectDropdown,
    selectButton,
    selectListItem,
    selectGridItem
} from './MendixControls/ControlTypes.js'

import { login } from './MendixComponents/MxLogin.js'

fixture`Getting started`
    .page`http://localhost:8080/index.html?profile=Responsive`;

test('Update Project detail', async t => {

    // LOGIN
    await login();

    // SEARCH PROJECT
    await setTextField('textBox_searchText', 'Example Project 1'); // set the search field
    await selectButton('actionButton_Search'); // click search button
    await selectListItem('listView_myprojects', 1); // select first item in the list of results

    // UPDATE DETAIL
    await selectRadioButton('radioButtons_status', 'Active') // set Status radio button to active
    await setTextArea('textArea_projectInformation', '') // Clear existing value. When clearing a field, there is no need to include a codition.
    await setTextArea('textArea_projectInformation', 'This is sample detail for the information field.', { before: '' })
    await selectRadioButton('radioButtons_confidential', 'true') // set confidential radio to true
    await selectDropdown('referenceSelector_category', 'Category 2')
    await selectDropdown('referenceSelector_client', 'Client 4')

    // ADD REGION OFFICE
    await selectListItem('listView_project_Region', 4)
    await selectButton('actionButton_add_RegionOffice')
    await selectGridItem('grid_select_Region_Office', 'London - Primary Office')
    await selectButton('select_regionOffice');

    await t.wait(2000);

    // SAVE PROJECT
    await selectButton('actionButton_saveProject')
})


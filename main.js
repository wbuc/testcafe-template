
import mx from './MendixControls/ControlTypes.js'

import { login } from './MendixComponents/MxLogin.js'

fixture`Getting started`
    .page`http://localhost:8080/index.html?profile=Responsive`;

test('Update Project detail', async t => {

    // LOGIN
    await login();

    // SEARCH PROJECT
    await mx.setTextField('textBox_searchText', 'Example Project 1'); // set the search field
    await mx.selectButton('actionButton_Search'); // click search button
    await mx.selectListItem('listView_myprojects', 1); // select first item in the list of results

    // UPDATE DETAIL
    await mx.selectRadioButton('radioButtons_status', 'Active') // set Status radio button to active
    await mx.setTextArea('textArea_projectInformation', '') // Clear existing value. When clearing a field, there is no need to include a codition.
    await mx.setTextArea('textArea_projectInformation', 'This is sample detail for the information field.', { before: '' })
    await mx.selectRadioButton('radioButtons_confidential', 'true') // set confidential radio to true
    await mx.selectDropdown('referenceSelector_category', 'Category 2')
    await mx.selectDropdown('referenceSelector_client', 'Client 4')

    // ADD REGION OFFICE
    await mx.selectListItem('listView_project_Region', 4)
    await mx.selectButton('actionButton_add_RegionOffice')
    await mx.selectGridItem('grid_select_Region_Office', 'London - Primary Office')
    await mx.selectButton('select_regionOffice');

    await t.wait(2000);

    // SAVE PROJECT
    await mx.selectButton('actionButton_saveProject')
})


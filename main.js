
import { Selector } from 'testcafe';
import { setTextField, setTextArea, selectRadioButton, selectDropdown, selectButton, selectListItem, selectGridItem } from './MendixControls/ControlTypes.js'

import { login } from './MendixComponents/MxLogin.js'


fixture`Getting started`
    .page`http://localhost:8080/index.html?profile=Responsive`;



test('Update existing project', async t => {

    // LOGIN
    await login();

    // SEARCH PROJECT
    await setTextField('textBox_searchText', 'Test Project 1'); // set the search field
    await selectButton('actionButton_Search'); // click search button
    await selectListItem('listView_myprojects', 1); // select first item in the list of results

    // UPDATE DETAIL
    await selectRadioButton('radioButtons_status', 'Active') // set Status radio button to active
    await setTextArea('textArea_factualInformation', 'Sample text area text') // enter text for factual information
    await selectRadioButton('radioButtons_confidential', 'true') // set confidential radio to true
    await selectDropdown('referenceSelector_category', 'Category 2')
    await selectDropdown('referenceSelector_Client', 'Client 4', 1000)

    // ADD LOCAL COUNSEL
    await selectListItem('listView_Project_Jurisdiction', 4, 1000)
    await selectButton('actionButton_Add_LocalCounsel')
    await selectGridItem('grid_Select_Local_Counsel', 'Uk 4')
    await selectButton('select_Jurisdiction');


    await t.wait(2000);

    // SAVE PROJECT
    await selectButton('actionButton_saveProject') // save project
})


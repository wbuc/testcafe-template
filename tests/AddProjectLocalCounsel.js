
import { Selector } from 'testcafe';
import { TextField, TextArea, RadioButton, Dropdown, Button, ListItem, GridItem } from './MendixControls/ControlTypes.js'

import { login } from './MendixComponents/MxLogin.js'


fixture`Getting started`
    .page`http://localhost:8080/index.html?profile=Responsive`;



test('Add project local counsel', async t => {

    // Login component
    await login();

    // SEARCH PROJECT
    await TextField(homePage.search.target, homePage.search.text); // set the search field
    await Button('actionButton_Search'); // click search button
    await ListItem('listView_myprojects', 1); // select first item in the list of results

    // UPDATE DETAIL
    await RadioButton('radioButtons_status', 'Active') // set Status radio button to active
    await TextArea('textArea_factualInformation', 'Sample text area text') // enter text for factual information
    await RadioButton('radioButtons_confidential', 'true') // set confidential radio to true
    await Dropdown('referenceSelector_category', 'Category 2')
    await Dropdown('referenceSelector_Client', 'Client 4', 1000)

    // ADD LOCAL COUNSEL
    await ListItem('listView_Project_Jurisdiction', 4, 1000)
    await Button('actionButton_Add_LocalCounsel')
    await GridItem('grid_Select_Local_Counsel', 'Uk 4')
    await Button('select_Jurisdiction');


    await t.wait(2000);

    // SAVE PROJECT
    await Button('actionButton_saveProject') // save project
})


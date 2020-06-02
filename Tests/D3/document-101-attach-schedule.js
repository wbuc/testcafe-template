
import mx from "../../MxControls/mx-control-types.js"

import { loginProxy } from '../../MxComponents/mx-login-proxy.js'
import { appUrl } from '../../Shared/presets.js'

fixture`Getting started`
  .page`${appUrl}`;


test('Update Project detail', async t => {

  // LOGIN
  await loginProxy();

  // Navigate to fileroom - position of link in navbar.
  await mx.selectNavLink(2);

  // SEARCH DOCUMENT
  await mx.setTextBox('textBox3', 'FR_Rent Agreement_office_15.01.2018'); // set the search field
  await mx.selectButton('button_searchFileroom'); // click search button

  await mx.selectGridItem('grid5', 'FR_Rent Agreement_office_15.01.2018') // Select the search result.
  await mx.selectButton('button_ReviewDocument') // open the document.

  // ATTACH SCHEDULE
  await mx.selectButton('action_AddSchedule'); //Open the schedule select page.
  await mx.selectGridItem('grid_MasterTemplates', 'Real Estate - Lease (Standard)') // Select the schedule.
  await mx.selectButton('actionButton_SelectSchedule');
  await mx.confirmDialog(); // Proceed the confirmation dialog.

  // SAVE DOCUMENT
  await mx.selectButton('action_Save');


})


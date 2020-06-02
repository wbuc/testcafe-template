
import mx from "../../MxControls/mx-control-types.js"
import { loginProxy } from '../../MxComponents/mx-login-proxy.js'
import { appUrl } from '../../Shared/presets.js'

fixture`Getting started`
  .page`${appUrl}`;


test('Update Project detail', async t => {

  // LOGIN - Lead Associate
  await loginProxy();

  // Navigate to fileroom - position of link in navbar.
  await mx.selectNavLink(2);

  // SEARCH DOCUMENT
  await mx.setTextBox('textBox3', 'Errichtung (Umbenennung in) GB F Holding GmbH'); // set the search field.
  await mx.selectButton('button_searchFileroom'); // click search button.

  await mx.selectGridItem('grid5', 'Errichtung (Umbenennung in) GB F Holding GmbH') // Select the search result.
  await mx.selectButton('button_ReviewDocument') // open the document.

  await mx.selectButton('dropdown_popout'); // Open the quick action context menu
  await mx.selectButton('action_AddFinding'); // Open the new finding dialog.

  // ADD FINDING DETAIL
  await mx.selectDropdown('dropdown_Header1', 'Sample Heading 2', 1000); // Set the three header dropdown fields
  await mx.selectDropdown('dropdown_Header2', 'Sub Heading A', 2000);
  await mx.setTextBox('textBox_FindingHeader', 'Test finding header');
  await mx.selectButton('action_saveFinding'); // save the finding

  // SAVE DOCUMENT
  await mx.selectButton('action_Save');


})


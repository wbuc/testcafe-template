
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
    await mx.setTextBox('textBox3', 'Errichtung (Umbenennung in) GB F Holding GmbH'); // set the search field
    await mx.expectEqual('textBox3', 'Errichtung (Umbenennung in) GB F Holding GmbH', 'Search field failed');

    await mx.selectButton('button_searchFileroom'); // click search button
    await mx.selectGridItem('grid5', 'Errichtung (Umbenennung in) GB F Holding GmbH') // Select the search result.
    await mx.selectButton('button_ReviewDocument') // open the document.

    // SET FIELDS
    await mx.selectDropdown('dropdown_Reviewer', 'LA1')
    await mx.selectDropdown('dropdown_ScopeOfReview', 'Legal Review')
    await mx.setTextBox('textbox_Language', 'Marvin test!'); // set the search field

    // SAVE DOCUMENT
    await mx.selectButton('action_Save');


})


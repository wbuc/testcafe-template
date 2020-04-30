# Mendix Applications: testcafe-template 

**Supported Mendix controls**
```
    - setTextBox(name, value, { before:'' } = null)
    - setTextArea(name, value, { before:'' } = null)
    - selectRadioButton(name, value)
    - selectDropdown(name, value)
    - selectButton(name)
    - selectListItem(name, index = 1)
    - selectGridItem(name, value)
```

**Special considerations**
- *name* parameter is whatever value is set for the Mx control under Common > Name. No need to add a CSS selected.
- *value* parameter is what is shown on the page. 
- Radiobutton *value* should be the enum value set in the Mx app, not the display value that user sees on the page.
- LisItem will select the first record in the list if no *index* was specified. Set the *index* to select the nth item in the list. 

## Examples
To select an option in a dropdown menu, instead of this
```javascript
    const _dropdown = Selector('.mx-name-Dropdown_Colour select')
    const _options = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_options.withText('Green'))
```
use this
```javascript
    await mx.selectDropdown('Dropdown_Colour', 'Green')
```
***More documentation coming soon...***




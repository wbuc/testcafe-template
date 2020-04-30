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
    - expectEqual(name, value, message = '')
```

**Special considerations**
- *name* parameter is whatever value is set for the Mx control under Common > Name. No need to add a CSS selected.
- *value* parameter is what is shown on the page. 
- Radiobutton *value* should be the enum value set in the Mx app, not the display value that user sees on the page.
- LisItem will select the first record in the list if no *index* was specified. Set the *index* to select the nth item in the list.
- Asserts can be set using the *expectEqual()* and *expectContains()*. A custom message can be set as optional. 

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

To set and test a field value, instead of this
```javascript
    const _firstName_ = Selector('.mx-name-textBox_name input')
    await t
        .typeText(_firstName_, 'Benny')
        .expect(_firstName.value).eql('Benny');
```
use this
```javascript
    await mx.setTextBox('textBox_name', 'Benny'); // set the search field
    await mx.expectEqual('textBox_name', 'Benny');
```

***More documentation coming soon...***




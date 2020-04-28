# Mendix Applications: testcafe-template 

**Supported Mendix controls**
```
    - TextField(name, value, wait = 100)
    - TextArea(name, value, wait = 100)
    - RadioButton(name, value, wait = 100)
    - Dropdown(name, value, wait = 100)
    - Button(name, wait = 100)
    - ListItem(name, index = 1, wait = 100)
    - GridItem(name, value, wait = 100)
```

**Special considerations**
- *name* parameter is whatever value is set for the Mx control under Common > Name. No need to add a CSS selected.
- *value* parameter is what is shown on the page. 
- All controls has an optional *wait* parameter before triggering the next input. Default value is 100ms.
- Radiobutton *value* should be the enum value set in the Mx app, not the display value that user sees on the page.
- LisItem will select the first record in the list if no *index* was specified. Set the *index* to select the nth item in the list. 

## Eaxamples
To select an option in a dropdown menu, instead of this
```
    const _dropdown = Selector('.mx-name-Dropdown_Colour select')
    const _options = _dropdown.find('option')

    await t.click(_dropdown)
        .click(_options.withText('Green'))
```
use this
```
    await Dropdown('Dropdown_Colour', 'Green')
```
***More documentation coming soon...***




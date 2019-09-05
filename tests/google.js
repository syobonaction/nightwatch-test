module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Vladimir Lenin': browser => {
        // values
        const querySearchWordsByAll = 'Vladimir Lenin';

        // form selectors
        const searchWordsByAllInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_ru"]';
        const lastUpdatedDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdatedDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';

        // search results selectors
        const mainSearchSelector = `#searchform input[name="q"][value="${querySearchWordsByAll}"]`;

        browser
            .url('https://www.google.com/advanced_search')
            .waitForElementVisible(searchWordsByAllInputSelector)
            .setValue(searchWordsByAllInputSelector, querySearchWordsByAll)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdatedDropdownOpenerSelector)
            .click(lastUpdatedDropdownValueSelector)
            .perform(() => {debugger})
            .click(submitButtonSelector)

            // Parameter assertions
            browser
                .assert.urlContains('as_q=Vladimir+Lenin', `Params: Query is "${querySearchWordsByAll}."`)
                .assert.urlContains('lr=lang_ru', 'Params: Language is Russian.')
                .assert.urlContains('as_qdr=m', 'Params: Time period is last month.');

            // UI assertions
            browser
                .assert.visible(mainSearchSelector, `UI: "${querySearchWordsByAll}" is set in the query input.`)
                .saveScreenshot('tests_output/google.png');
    }
}
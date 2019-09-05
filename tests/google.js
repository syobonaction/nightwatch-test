module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Vladimir Lenin': browser => {
        // values
        const querySearchWordsByAll = 'Vladimir Lenin';

        const page = browser.page.googleAdvancedSearch();

        // search results selectors
        const mainSearchSelector = `#searchform input[name="q"][value="${querySearchWordsByAll}"]`;

        page
            .navigate()
            .waitForElementVisible('@searchWordsByAllInput')
            .setQuery(querySearchWordsByAll)
            .selectFilter('@languageDropdown', 'lang_ru')
            .selectFilter('@lastUpdatedDropdown', 'm')
            .search()

            // Parameter assertions
            browser
                .perform(() => {console.log('')})
                .perform(() => {console.log('Parameter Assertions:')})
                .assert.urlContains('as_q=Vladimir+Lenin', `Query is "${querySearchWordsByAll}."`)
                .assert.urlContains('lr=lang_ru', 'Language is Russian.')
                .assert.urlContains('as_qdr=m', 'Time period is last month.')

            // UI assertions
            browser
                .perform(() => {console.log('')})
                .perform(() => {console.log('UI Assertions:')})
                .assert.visible(mainSearchSelector, `"${querySearchWordsByAll}" is set in the query input.`)
                .saveScreenshot('tests_output/google.png');
    }
}
module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        searchWordsByAllInput: 'input[name="as_q"]',
        languageDropdown: '#lr_button',
        lastUpdatedDropdown: '#as_qdr_button',
        submitButton: '.jfk-button[type="submit"]'
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@searchWordsByAllInput', value);
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        search() {
            return this
                .click('@submitButton');
        }
    }]
}
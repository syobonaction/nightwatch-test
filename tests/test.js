module.exports = {
    'first_test_case': browser => {
        browser
            .url('https://east.paxsite.com')
            .waitForElementVisible('#countdown')
            .assert.containsText('#countdown strong', '00');
    }
};
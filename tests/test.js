module.exports = {
    'First test case': browser => {
        browser
            .url('https://east.paxsite.com')
            .waitForElementVisible('#countdown')
            .assert.containsText('#countdown strong', '00');
    }
};
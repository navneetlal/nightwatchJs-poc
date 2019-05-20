module.exports = {
  'Title is Bing': function (browser) {
    browser
      .url('https://www.bing.com')
      .waitForElementVisible('body', 1000)
      .verify.title('Bing')
      .end()
  }
}
const seed = require("../../../scripts/seed");

module.exports = {
  beforeEach: async (browser, done) => {
    try {
      await Promise.all([seed.users(), seed.items()]);
      done();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  },
  "add item to cart": browser => {
    const home = browser.page.home();
    const { firstItemSummary } = home.section;
    let url;
    home
      .navigate()
      .waitForElementVisible("@itemSummaries", 5000);
    firstItemSummary
      .getAttribute(
        "@link",
        "href",
        result => { url = result.value; }
      )
      .click("@link");
    browser
      .waitForElementVisible(".item", 5000)
      .perform(() => browser.assert.urlEquals(url))
      .end();
  }
};

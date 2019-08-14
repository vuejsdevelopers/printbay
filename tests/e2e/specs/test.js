module.exports = {
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

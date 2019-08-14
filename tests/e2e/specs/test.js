module.exports = {
  "add item to cart": browser => {
    let url;
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".item-summaries", 5000)
      .getAttribute(
        ".item-summaries > :first-child > a",
        "href",
        result => { url = result.value; }
      )
      .click(".item-summaries > :first-child")
      .waitForElementVisible(".item", 5000)
      .perform(() => browser.assert.urlEquals(url))
      .end();
  }
};

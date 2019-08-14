module.exports = {
  "add item to cart": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .click(".item-summaries > :first-child")
      .end();
  }
};

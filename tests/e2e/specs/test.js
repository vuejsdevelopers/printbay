const seed = require("../../../scripts/seed");

const user = {
  name: "George",
  email: "george@test.com",
  password: "test1234"
};

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
    const register = browser.page.register();
    const { form } = register.section;
    const site = browser.page.site();
    const { stickyNav } = site.section;
    const item = browser.page.item();
    let url;
    let qty;
    register
      .navigate()
      .waitForElementPresent(form.selector);
    form
      .$submit(user);
    register.waitForElementNotPresent(form.selector);
    browser
      .assert.urlEquals(home.url);
    stickyNav
      .assert.containsText(stickyNav.selector, user.name);
    home
      .waitForElementVisible("@itemSummaries");
    firstItemSummary
      .getAttribute(
        "@link",
        "href",
        result => { url = result.value; }
      )
      .click("@link");
    item.waitForElementVisible("@item");
    browser
      .perform(() => browser.assert.urlEquals(url))
      .getCartQty(function (result) { qty = result; });
    item.click("@addToCart");
    browser
      .getCartQty(result => browser.assert.equal(++qty, result))
      .end();
  }
};

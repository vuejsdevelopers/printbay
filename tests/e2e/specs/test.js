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
  "register user": browser => {
    const home = browser.page.home();
    const site = browser.page.site();
    const { stickyNav } = site.section;
    browser
      .register(user)
      .assert.urlEquals(home.url);
    stickyNav
      .assert.containsText(stickyNav.selector, user.name);
    browser.end();
  },
  "select item from home page": browser => {
    let url;
    browser
      .selectItem(function (val) { url = val; })
      .perform(() => browser.assert.urlEquals(url))
      .end();
  },
  "add item to cart": browser => {
    const item = browser.page.item();
    let qty;
    browser
      .register(user)
      .selectItem();
    browser
      .getCartQty(function (result) { qty = result; });
    item.click("@addToCart");
    browser
      .getCartQty(result => browser.assert.equal(++qty, result))
      .end();
  },
  "check item in cart": browser => {
    const item = browser.page.item();
    const cart = browser.page.cart();
    let itemId;
    browser
      .register(user)
      .selectItem(val => {
        itemId = val.split("/").slice(-1).pop();
      });
    item
      .click("@addToCart");
    cart
      .navigate()
      .waitForElementPresent("@cart");
    browser
      .perform(() => {
        cart.assert.attributeEquals("@firstCartItem", "data-id", itemId);
      });
    browser.end();
  }
};

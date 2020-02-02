exports.command = function (callback = function () {}) {
  const home = this.page.home();
  const { firstItemSummary } = home.section;
  const item = this.page.item();
  home
    .navigate()
    .waitForElementVisible("@itemSummaries");
  firstItemSummary
    .getAttribute(
      "@link",
      "href",
      result => callback(result.value)
    )
    .click("@link");
  item.waitForElementVisible("@item");
  return this;
};

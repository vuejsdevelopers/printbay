exports.command = function (user) {
  const page = this.page.register();
  const { form } = page.section;
  page
    .navigate()
    .waitForElementPresent(form.selector);
  form
    .$submit(user);
  page.waitForElementNotPresent(form.selector);
  return this;
};

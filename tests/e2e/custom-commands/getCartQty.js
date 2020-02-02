exports.command = function (callback) {
  const selector = "#cart-qty";
  return this.element("css selector", selector, res => {
    if (res.status === -1) {
      callback(0);
    } else {
      this.getText(selector, result => {
        callback(parseInt(result.value));
      });
    }
  });
};

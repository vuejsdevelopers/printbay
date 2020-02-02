module.exports = {
  url: `${process.env.VUE_DEV_SERVER_URL}cart`,
  elements: {
    cart: {
      selector: ".cart"
    },
    firstCartItem: {
      selector: ".cart-items > :first-child"
    }
  }
};

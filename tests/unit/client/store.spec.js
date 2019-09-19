import item from "@/store/modules/Item";
import { CART_COUNT, CART_TOTAL } from "@/constants";

describe("Item module", () => {
  const item0 = {
    cart: 1,
    price: 2
  };
  const item1 = {
    cart: 2,
    price: 4
  };
  const state = {
    data: {
      0: item0,
      1: item1
    }
  };
  it("should return total number of items in cart", () => {
    const getterOutput = item.getters[CART_COUNT](state);
    const manuallyCalculated = item0.cart + item1.cart;
    expect(getterOutput).toBe(manuallyCalculated);
  });
  it("should return total price of all items in cart", () => {
    const getterOutput = item.getters[CART_TOTAL](state);
    const manuallyCalculated = item0.cart * item0.price + item1.cart * item1.price;
    expect(getterOutput).toBe(manuallyCalculated);
  });
});

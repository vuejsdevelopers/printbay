import { CART_COUNT, CART_TOTAL } from "@/constants";

export default {
  getters: {
    CART_COUNT: state =>
      Object.entries(state.data).reduce((count, item) => {
        count += item[1].cart;
        return count;
      }, 0),
    CART_TOTAL: state =>
      Object.entries(state.data).reduce((total, item) => {
        total += item[1].price * item[1].cart;
        return total;
      }, 0)
  }
};

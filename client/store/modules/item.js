import { CART_COUNT } from "@/constants";

export default {
  getters: {
    CART_COUNT: state =>
      Object.entries(state.data).reduce((count, item) => {
        count += item[1].cart;
        return count;
      }, 0)
  }
};

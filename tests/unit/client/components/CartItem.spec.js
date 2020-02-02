import CartItem from "@/components/CartItem";
import createWrapper from "../wrapper";
import Item from "@/store/models/Item";
import { VBtn, VTextField } from "vuetify/lib";

jest.mock("@/store/models/Item", () => require("../mocks/Item"));

describe("CartItem.vue", () => {
  const id = "1";
  const config = {
    propsData: {
      id
    },
    stubs: {
      VBtn,
      VTextField
    }
  };
  it("should render correctly", () => {
    const wrapper = createWrapper(CartItem, config);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call item update when remove button clicked", () => {
    const spy = jest.spyOn(Item, "update");
    createWrapper(CartItem, config)
      .find(VBtn)
      .trigger("click");
    expect(spy).toHaveBeenCalledWith({
      where: id,
      data: {
        cart: 0
      }
    });
  });
  it("should change quantity when input changes", () => {
    const wrapper = createWrapper(CartItem, config);
    const spy = jest.spyOn(wrapper.vm, "qty", "set");
    const input = wrapper.find(VTextField).find("input");
    const newQty = "2";
    input.setValue(newQty);
    expect(spy).toHaveBeenLastCalledWith(newQty);
  });
});

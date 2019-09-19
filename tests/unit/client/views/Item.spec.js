import createWrapper from "../wrapper";
import ItemView from "@views/Item";
import { VBtn } from "vuetify/lib";
import Item from "@/store/models/Item";

jest.mock("@/store/models/Item", () => require("../mocks/Item"));

describe("Item.vue", () => {
  it("should render correctly when admin", () => {
    const mocks = {
      $auth: {
        check: () => true
      }
    };
    const wrapper = createWrapper(ItemView, { mocks });
    expect(wrapper).toMatchSnapshot();
  });
  it("should add item to cart when user authenticated", () => {
    const mocks = {
      $auth: {
        check: role => role !== "admin"
      }
    };
    const stubs = {
      VBtn
    };
    const spy = jest.spyOn(Item, "update");
    createWrapper(ItemView, { mocks, stubs })
      .find(VBtn)
      .trigger("click");
    expect(spy).toHaveBeenCalled();
  });
  it("should redirect to login when guest", () => {
    window.scrollTo = () => {};
    const mocks = {
      $auth: {
        check: () => false
      }
    };
    const stubs = {
      VBtn
    };
    const wrapper = createWrapper(ItemView, { mocks, stubs });
    const spy = jest.spyOn(wrapper.vm.$router, "push");
    wrapper
      .find(VBtn)
      .trigger("click");
    expect(spy).toHaveBeenCalled();
  });
});

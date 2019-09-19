import createWrapper from "../wrapper";
import ItemView from "@views/Item";
import { VBtn } from "vuetify/lib";

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
    createWrapper(ItemView, { mocks, stubs })
      .find(VBtn)
      .trigger("click");
  });
  it("should redirect to login when guest", () => {});
});

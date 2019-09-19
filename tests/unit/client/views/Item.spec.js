import createWrapper from "../wrapper";
import ItemView from "@views/Item";

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
  it("should add item to cart when user authneticated", () => {});
  it("should redirect to login when guest", () => {});
});

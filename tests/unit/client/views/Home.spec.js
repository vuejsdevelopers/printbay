import createWrapper from "../wrapper";
import Home from "@views/Home";

jest.mock("@/store/models/Item", () => require("../mocks/Item"));

describe("Home.vue", () => {
  it("should render correctly", () => {
    const wrapper = createWrapper(Home);
    expect(wrapper).toMatchSnapshot();
  });
});

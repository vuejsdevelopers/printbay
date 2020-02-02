import App from "@/App";
import createWrapper from "./wrapper";

describe("App.vue", () => {
  it("should render correctly", () => {
    const wrapper = createWrapper(App);
    expect(wrapper).toMatchSnapshot();
  });
});

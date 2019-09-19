import App from "@/App";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import router from "@/router";
import Vuetify from "vuetify";
import Vue from "vue";
Vue.use(Vuetify);

describe("App.vue", () => {
  it("should render correctly", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const wrapper = shallowMount(App, { localVue, router });
    expect(wrapper).toMatchSnapshot();
  });
});

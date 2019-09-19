import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import router from "@/router";
import Vuetify from "vuetify";
import Vue from "vue";
Vue.use(Vuetify);

export default function (component, options = {}) {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  return shallowMount(component, Object.assign({ localVue, router }, options));
}

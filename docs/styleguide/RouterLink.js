export default {
  props: {
    tag: { type: String, default: "a" }
  },
  render (createElement) {
    return createElement(this.tag, {}, this.$slots.default);
  }
};

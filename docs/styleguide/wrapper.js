export default function (component) {
  component.name = "PreviewContainer";
  return {
    name: "Wrapper",
    render (h) {
      return h(component);
    }
  };
}

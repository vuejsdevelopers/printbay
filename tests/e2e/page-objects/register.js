module.exports = {
  url: `${process.env.VUE_DEV_SERVER_URL}register`,
  sections: {
    form: {
      selector: "form[name=register]",
      elements: {
        nameInput: {
          selector: "input[name=name]"
        },
        emailInput: {
          selector: "input[name=email]"
        },
        passwordInput: {
          selector: "input[name=password]"
        },
        submitButton: {
          selector: "button[name=submit]"
        }
      }
    }
  }
};

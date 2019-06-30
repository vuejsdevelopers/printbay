module.exports = {
  serverPort: 8060,
  dangerouslyUpdateWebpackConfig (webpackConfig) {
    webpackConfig.devServer = {
      watchOptions: {
        poll: 500
      }
    };
    return webpackConfig;
  },
  sections: [
    {
      name: "Getting started",
      content: "./docs/styleguide/header.md"
    },
    {
      name: "Components",
      components: "./client/components/*.vue"
    }
  ],
  renderRootJsx: "./docs/styleguide/wrapper.js",
  require: [ "./docs/styleguide/style.css" ],
  template: {
    favicon: "./public/favicon.ico",
    head: {
      links: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Glegoo|Open+Sans:500,900|Material+Icons"
        }
      ]
    }
  },
  usageMode: "expand",
  exampleMode: "expand"
};

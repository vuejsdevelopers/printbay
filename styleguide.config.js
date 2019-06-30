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
      name: "Components",
      components: "./client/components/*.vue"
    }
  ]
};

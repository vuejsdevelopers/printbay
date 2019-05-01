const path = require("path");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./client/main.js")
      .end();
    config.resolve.alias
      .set("@", path.join(__dirname, "./client"))
      .set("@components", path.join(__dirname, "client", "components"))
      .set("@assets", path.join(__dirname, "client", "assets"))
      .set("@views", path.join(__dirname, "client", "views"));
  },
  devServer: {
    port: process.env.PORT,
    proxy: `http://localhost:${process.env.SERVER_PORT}`,
    host: "0.0.0.0",
    public: "10.10.30.30",
    watchOptions: {
      poll: 500,
      ignored: [/node_modules/, /scripts/, /server/]
    }
  }
};

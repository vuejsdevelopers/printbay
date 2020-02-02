const path = require("path");

module.exports = {
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "<rootDir>/node_modules/jest-transform-stub"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!vuetify).+\\.js$"
  ],
  moduleNameMapper: {
    "^@/(.*)$": path.join("<rootDir>", "client/$1"),
    "^@assets(.*)$": path.join("<rootDir>", "assets$1"),
    "^@components(.*)$": path.join("<rootDir>", "client", "components$1"),
    "^@views(.*)$": path.join("<rootDir>", "client", "views$1")
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  roots: [
    "<rootDir>/tests/unit/client"
  ]
};

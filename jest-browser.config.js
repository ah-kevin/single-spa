module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "single-spa": "<rootDir>/src/single-spa-bjke.js",
  },
  setupFiles: ["<rootDir>/spec/test-setup.js"],
};

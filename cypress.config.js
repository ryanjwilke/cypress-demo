const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "czspkg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

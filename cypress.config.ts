// import { defineConfig } from "cypress";

// export default defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://hunger-express-nu.vercel.app',

    setupNodeEvents(on, config) {
      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },

  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
});
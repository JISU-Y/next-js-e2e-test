import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      console.log(config) // see everything in here!

      // modifying config value with config object

      // if modified, IMPORTANT to return the updated config object
      return config
    },
  },
})

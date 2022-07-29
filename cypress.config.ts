import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5001/_renderer.html?',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});

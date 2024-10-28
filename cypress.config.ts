import * as process from "process";
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// @ts-ignore
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

require('dotenv').config();

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  config.env.stepDefinitions = 'tests/e2e/steps/**/*.ts';


  return config;
}

const baseUrl = process.env.ENVIRONMENT;

export default defineConfig({
  e2e: {
    baseUrl: baseUrl,
    specPattern: '**/*.feature',
    supportFile: 'tests/support/e2e.ts',
    setupNodeEvents,
    screenshotOnRunFailure: false,
    screenshotsFolder: 'tests/reports/screenshots',
    video: false,
    env: {
      grepFilterSpecs: true,
      omitFiltered: true,
      filterSpecs: true,
    },
  },
  // defaultCommandTimeout: 10000,
  retries: {
    runMode: 0,
    openMode: 0
  }
});

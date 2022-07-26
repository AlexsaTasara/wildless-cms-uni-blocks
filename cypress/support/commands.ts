/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { addMatchImageSnapshotCommand, SnapshotOptions } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Screenshot test the current page.
       * @param name file name of the screenshot
       * @param options general options
       */
      matchImageSnapshot(name: string, options?: SnapshotOptions): Chainable<Element>;

      /**
       * Screenshot test the current page.
       * @param options general options
       */
      matchImageSnapshot(options?: SnapshotOptions): Chainable<Element>;
    }
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

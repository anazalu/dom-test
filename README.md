# dom-test

## ToDo

- Read this Cypress doc
    * https://docs.cypress.io/guides/core-concepts/introduction-to-cypress
- Implement two more Cypress tests
    * delete item
    * filter items
- Create a new workflow in GitHub Actions to run the Cypress tests on push to the main branch
    * Workflow Step 1: install project dependencies as per package.json
        - npm ci
    * Workflow Step 2: start the dev server to serve index.html at http://localhost:3000/
        - npm run dev
    * Workflow Step 3: run the Cypress tests as in
        - https://github.com/anazalu/order-flow/blob/main/.github/workflows/workflow.yml#L92
    * Note that Step 3 needs a Cypress config file to be present in the project directory
        - https://github.com/anazalu/order-flow/blob/main/front/cypress.config.ts

## Useful Commands

- Start the dev server
    * npm run dev
- Launch Cypress
    * npx cypress open

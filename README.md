Cypress E2E Tests

Automated end-to-end testing for the Automation Exercise web application using Cypress.

PREREQUISITES
Before using this project, ensure you have installed:

Node.js 20 (Download from https://nodejs.org/)

npm (comes with Node.js)

Git (optional, for cloning)

INSTALLATION & SETUP

Clone the repository:
git clone https://github.com/harisgenjac/cypress-e2e-tests.git
cd cypress-e2e-tests

Install dependencies:
npm install

Run tests:

For headless mode:
npx cypress run

For interactive mode (GUI):
npx cypress open

PROJECT STRUCTURE
cypress/
e2e/ - Test files
files/ - Test data
fixtures/ - Test data
page-objects/ - Page object model classes
support/ - Custom commands

AUTHOR
Haris Genjac
GitHub Profile: https://github.com/harisgenjac

NOTE
This is an educational project and not affiliated with the official Automation Exercise website.
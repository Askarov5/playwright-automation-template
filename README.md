# Introduction

This is a playwright automation framework template for any website automated testing. The framework uses TypeScript. 
Crafting an automation framework in JavaScript or Typescript is a nuanced endeavor that demands meticulous attention to detail. The integration of tools like ES-Lint and Prettier serves as a protective shield, ensuring code quality and consistency. Strategic folder structuring, coupled with adept use of environment variables, empowers us to execute tests with flexibility, minimizing manual interventions. Leveraging dynamic test data from data sources not only enhances testing but also renders our code environment-agnostic. Embracing coding best practices and understanding the rationale behind them elevates us, as engineers, to foster a culture of excellence in automation framework development.

Detailed articles have been written and can be found here:
- [Building a Robust Automation Framework in Playwright](https://medium.com/@oroz.askarov/building-a-robust-automation-framework-in-playwright-typescript-version-b13be4e4bf56)
- [Building a Robust API Testing Framework in Playwright](https://medium.com/@oroz.askarov/mastering-rest-api-testing-with-playwright-typescript-version-0d5e9a698bc5)



# Pre requisites

- Node JS: ^18

# Installation and Run

1. CLONE the repo
2. Install and Build: RUN `npm i` OR `npm ci`
3. RUN the followings by `npm run ...`:

-     "debug": debug mode with default env
-     "test": run tests headless with default env
-     "test:local": run tests in local env
-     "test:dev": run tests in dev env
-     "test:qa": run tests in qa env
-     "test:uat": run tests in uat env
-     "test:prod": run tests in prod env
-     "headed": run tests on visible browser
-     "report": display reports

4. Display reports: RUN `npm run report`

# Writing tests 
All tests and test-related files are/should be located under the /src folder. For example:

- src/api - contains API tests and types
- src/ui - contains UI tests and page objects
- src/utils - utility functions of tests

# Dependencies

- [msnodesqlv8](https://www.npmjs.com/package/msnodesqlv8) - This library has full compatibility with MS SQL Server using an MS ODBC driver. Many functions e.g. open, query, connection pool, prepare, transactions, close will work with any ODBC compatible driver with its repsective database.

# Additional packages

- [dotenv](https://github.com/motdotla/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. If you're using NODE ^v20.6.0 (or newer) you can skip this package (don't forget to cleanup) [Node.js v20.6.0: Introducing Built-in `.env` File Support](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [cross-env](https://www.npmjs.com/package/cross-env) - makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.

The following dev dependencies have been added to keep the code clean and same format across the team.

- [ESlint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems
- [Prettier](https://prettier.io/) - code formatter.
- [AirBnb Javascript Style Guide](https://airbnb.io/javascript/)

# Run tests in local 

The Local environment set up requires local env variables and authentication variables to be placed in corresponding locations. Place local.env in the ./environments folder and make sure the file contains db secrets and authentication variables such as AUTH_TOKEN_URL, etc. (These variables are delivered by DevOps in the pipeline as environment variables) PS: Don't forget that azure services server should be up to run tests successfully.

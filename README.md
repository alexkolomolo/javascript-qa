# Kolomolo Javascript Automation test

The test is divided in 3 sections

- Frontend Testing
- API Testing
- Automation Scripting

Creativity and extra scenarios will greatly improve the evaluation

# Project setup

```

1.- clone this repository
2.- run npm install to install the dependencies
3.- complete the tasks for each section

```

# Section 1: Frontend Testing

Write the cypress scenarios and validations indicated for each file.

To run the cypress tests:

- `npm run cypress:open` (to open the console)
- `npm run cypress:test` (to run the tests)

## Scenario 1

```
Validation in file : home.spec.js

Should contain a Sign In button
Should type the email into the first edit box
Should type the email into the second edit box
Should check the footer section countains 4 columns
Should check the price is 5.99 euros a month

```

## Scenario 2

```
e2e in file: navigation.specs.js

Should log in to the site
Should look for the movie `Titanic`
Should play the movie
Should close the movie
Should log out

```

`All the profile information is in the fixture folder, and the base url is in the cypress.json`

# Section 2: API Testing

To run the API test:

- `npm run test`

The API URL is: https://anapioficeandfire.com/

The test file is located in test/api.test.js

```
Should return a status of 200
Should return the title of "Lord Commander of the Night's Watch" for character 583
Should return a status off 404 not found
Should return a page size of 10 results
Should validate an entire return payload (Any endpoint)

```

# Section 3: Automation Scripting

Application should be pushed to the public git repository and should have a working CI/CD pipeline that runs the tests. You can use GitHub Actions or GitLab CI/CD. The pipeline must execute all the test cases (Cypress and Frisby)

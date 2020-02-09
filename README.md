# Spaced Repetition Capstone
Built by Michael Weedman and Anugrah Lambogo

## Visit Our Site
[Live App](https://spaced-rep-phi.now.sh/ "Spaced repetition")
[Github repository](https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-server "Spaced repetition server")

## About Our Site

This site is a simple spaced repetition learning application meant to help a user learn a new language.

The application is mainly demonstrated through four major components: Login/Registration, Dashboard, Learning, and Feedback.  Each of these components represent different states that the user will encounter the site in.  New user's will register, then login.  Once a user is logged in, they will be brought to the dashboard screen where they can view the list of words they are trying to learn as well as their scores on the respective words.  Once they click the button to begin learning they will be prompted to enter a translation for a word and upon submitting their guess, will receive feedback on whether they were correct or incorrect, and have the ability to proceed to the next word to attempt to translate.

Screenshots of the major components are included below.

## Technology Used

**Client:** *ReactJs, HTML, CSS*

**Server/DB:** *NodeJS, Express, PostgreSQL*

**Testing:** *Mocha, Chai, Cypress*

## Setup

In order to run this react app on your local environment:

> *npm i* in order to install all dependencies

> *npm start* opens a localhost version of this React client.

> *API_ENDPOINT* in the config.js file points to the heroku hosted database.  In order to install a local version of the server/database, please see the [server repository](https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-server "Spaced repetition server") and follow README instructions for setting up a local server environment.

> *npm run cypress:open* to open cypress integration testing environment.  Cypress tests have been predestined.  If you wish to create custom Cypress tests, please consult Cypress documentation at [their site](https://www.cypress.io "cypress homepage").

## Screenshots

![Image - dashboard](https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-client/blob/master/screenshots/Dashboard.PNG?raw=true "dashboard")
![Image - learning](https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-client/blob/master/screenshots/Learning.PNG?raw=true "learning")
![Image - login](https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-client/blob/master/screenshots/Login.PNG?raw=true "login")
# hospital-api

un `npm install` in backend directory

# start the app


go to backend and run
node server.js

API collection :
/doctors/register
/doctors/login
/register_patient
/patient/:id/create_report
/patient/:id/all_report
/reports/:status

#testing
I have used Mocha and chai

Mocha is a testing framework for JavaScript that runs on Node.js and the browser. You can use any assertion library, 
in this case we are going to use Chai to validate the http requests we make against our ExpressJS Restful API.

Assertion with Chai provides natural language assertions, expressive and readable style. Chai provides three assertion styles: Should, Expect and Assert.
# run for testing
'''npm test'''

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login page feature",
  "description": "",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3075203585,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on hubspot login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyLoginPageTitle()"
});
formatter.result({
  "duration": 5600101536,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify invalid login from hubspot page",
  "description": "",
  "id": "login-page-feature;verify-invalid-login-from-hubspot-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter adem@sample.com into username field on the hubspot page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password field on the hubspot page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on hubspot page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify invalid login message on login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adem@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 168324002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.invalidLogin(String,String)"
});
formatter.result({
  "duration": 103250021,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 119703255,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyErrorMessage()"
});
formatter.result({
  "duration": 1133704877,
  "status": "passed"
});
formatter.after({
  "duration": 96559310,
  "status": "passed"
});
});
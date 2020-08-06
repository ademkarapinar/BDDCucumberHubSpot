@web

Feature: Login page feature

  Background:
    Given I am on hubspot login page

  @loginPage
  Scenario: Verify invalid login from hubspot page
    When I enter adem@sample.com into username field on the hubspot page
    And I enter test123 into password field on the hubspot page
    And I click on login button on hubspot page
    Then I verify invalid login message on login page

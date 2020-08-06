package stepDefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {
    LoginPage loginPage = new LoginPage();

    @Given("^I am on hubspot login page$")
    public void verifyLoginPageTitle() throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertEquals(loginPage.getLoginPageTitle(), "HubSpot Login");
    }

    @When("^I enter (.+) into (username|password) field on the hubspot page$")
    public void invalidLogin(String value, String field){
        switch (field) {
            case "username":
                loginPage.enterUsername(value);
                break;
            case "password":
                loginPage.enterPassword(value);
        }
    }

    @And("^I click on login button on hubspot page$")
    public void verifyInvalidLogin(){
        loginPage.clickLogin();
    }

    @Then("^I verify invalid login message on login page$")
    public void verifyErrorMessage(){
        Assert.assertEquals(loginPage.getErrorMessage(), "That email address doesn't exist.\n" +
                "The email address you've entered doesn't appear to exist. Please check your entry and try again.");
    }
}

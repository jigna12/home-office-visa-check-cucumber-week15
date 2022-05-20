package gov.uk.check.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;
import org.junit.Assert;

public class VisaConfirmationSteps {
    @Given("^I am on StartPage$")
    public void iAmOnStartPage() {
    }

    @When("^I click on start button$")
    public void iClickOnStartButton() {
        new StartPage().clickStartNow();
    }

    @And("^I select the nationality of \"([^\"]*)\"$")
    public void iSelectTheNationalityOf(String country) {
        new SelectNationalityPage().selectcountry(country);
    }

    @And("^I Click on Continue button$")
    public void iClickOnContinueButton() {
        new SelectNationalityPage().clickContinueButton();
    }

    @And("^I select the Select reason \"([^\"]*)\"$")
    public void iSelectTheSelectReason(String reason) {
        new ReasonForTravelPage().selectReasonForVisit(reason);

    }

    @Then("^I can verify the result \"([^\"]*)\"$")
    public void iCanVerifyTheResult(String errorMsg) {
        Assert.assertEquals("Error message not display",errorMsg,new ResultPage().getResultMessage());


    }

    @And("^I Select intendent to stay for \"([^\"]*)\"$")
    public void iSelectIntendentToStayFor(String staytime)  {
        new DurationOfStayPage().selectLengthOfStay(staytime);

    }


    @And("^I Select have planning to work for \"([^\"]*)\"$")
    public void iSelectHavePlanningToWorkFor(String msg)  {
        new WorkTypePage().selectJobtypeList(msg);

    }

    @Then("^I can verify result \"([^\"]*)\"$")
    public void iCanVerifyResult(String errormsg)  {
        Assert.assertEquals("Error message not display",errormsg,new ResultPage().getResultMessage());
    }


//    @And("^I select state My partner of family member have uk immigration status \"([^\"]*)\"$")
//    public void iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String status) {
//        new FamilyImmigrationStatusPage().selectImmigrationStatus(status);
//
//    }
}

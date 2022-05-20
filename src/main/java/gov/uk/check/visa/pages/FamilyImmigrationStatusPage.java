package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FamilyImmigrationStatusPage extends Utility {

    /*6.FamilyImmigrationStatusPage - nextStepButton, yes, no locators and create methods 'void
    selectImmigrationStatus(String status)'
            (Note: Use switch statement for select immigration status) and 'void clickNextStepButton()'*/
    private static final Logger log = LogManager.getLogger(FamilyImmigrationStatusPage.class.getName());

    public FamilyImmigrationStatusPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='gem-c-radio govuk-radios__item']//label")
    List<WebElement> visaType;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;

    public void selectImmigrationStatus(String status) {
        switch (status) {
            case "Yes":
                visaType.get(0).click();
                break;
            case "NO":
                visaType.get(1).click();
                log.info("select immigartion status : " + visaType.toString());
                break;
        }
    }

    public void clickContinueButton() {
        log.info("click Continue Button : " + continueButton.toString());
        clickOnElement(continueButton);
    }
}




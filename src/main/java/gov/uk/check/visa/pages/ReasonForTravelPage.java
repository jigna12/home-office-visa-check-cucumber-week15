package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
/* 5.ReasonForTravelPage - nextStepButton, reasonForVisitList locators and create methods
        'void selectReasonForVisit(String reason)'
        and 'void clickNextStepButton()'*/

public class ReasonForTravelPage extends Utility {

    private static final Logger log = LogManager.getLogger(ReasonForTravelPage.class.getName());

    public ReasonForTravelPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div//label")
    List<WebElement> reasonList;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement clickContinue;

    public void selectReasonForVisit(String reason) {
        for (WebElement reasonEl : reasonList) {
            if (reasonEl.getText().contains(reason)) {
                clickOnElement(reasonEl);
                log.info("Reason for visit : " + reasonList.toString());
                break;
            }
        }
    }

    public void clickContinueButton() {
        log.info("click Continue Button : " + clickContinue.toString());
        clickOnElement(clickContinue);
    }
}


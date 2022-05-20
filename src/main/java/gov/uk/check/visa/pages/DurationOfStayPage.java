package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DurationOfStayPage extends Utility {

    private static final Logger log = LogManager.getLogger(DurationOfStayPage.class.getName());

    public DurationOfStayPage() {
        PageFactory.initElements(driver, this);
    }

    /* 7.DurationOfStayPage - nextStepButton, lessThanSixMonths, moreThanSixMonths locators
     and create methods
 'void selectLengthOfStay(String moreOrLess)' (Note: use switch statement for select
     moreOrLess stay) and
 'void clickNextStepButton()'*/
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> stayTime;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;

    public void selectLengthOfStay(String moreOrLess) {
        switch (moreOrLess) {
            case "6 months or less":
                stayTime.get(0).click();
                break;
            case "longer than 6 months":
                stayTime.get(1).click();
                log.info("select Length Of Stay : " + stayTime.toString());
                break;
        }
    }
    public void clickNextStepButton() {
        log.info("click Next Step Button : " + continueButton.toString());
        clickOnElement(continueButton);
    }
}

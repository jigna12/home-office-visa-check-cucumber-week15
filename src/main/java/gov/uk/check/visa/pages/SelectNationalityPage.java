package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectNationalityPage extends Utility {

    /* 3.SelectNationalityPage -nationalityDropDownList, nextStepButton locators and create
     methods 'void selectNationality(String nationality)'
     and 'void clickNextStepButton()'*/
    private static final Logger log = LogManager.getLogger(SelectNationalityPage.class.getName());

    public SelectNationalityPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "response")
    WebElement selectCountry;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;

    public void selectcountry(String country) {
        log.info("select country : " + selectCountry.toString());
        selectByVisibleTextFromDropDown(selectCountry, country);
    }

    public void clickContinueButton() {
        log.info("click Continue Buttony : " + continueButton.toString());
        clickOnElement(continueButton);
    }
}

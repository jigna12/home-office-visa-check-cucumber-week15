Feature: visaConfirmationTest
  As a User I should able to use functinality of visa confirmation

  @smoke
  Scenario: an Australian Comin To UK For Tourism
    Given I am on StartPage
    When I click on start button
    And I select the nationality of "Australia"
    And I Click on Continue button
    And I select the Select reason "Tourism"
    And I Click on Continue button

  @sanity @regression
  Scenario: A Chilean coming to the UK for work and plans on staying for longer than SixMonths
    Given I am on StartPage
    When I click on start button
    And I select the nationality of "Chile"
    And I Click on Continue button
    And I select the Select reason "Work, academic visit or business"
    And I Click on Continue button
    And I Select intendent to stay for "longer than 6 months"
    And I Click on Continue button
    And I Select have planning to work for "Health and care professional"
    And I Click on Continue button
    Then I can verify result "You need a visa to work in health and care"

  @smoke @sanity @regression
  Scenario: .A columbian national coming to the UK Tt join a partner for a longStay they do have an article 10Or20Card
    Given I am on StartPage
    When I click on start button
    And I select the nationality of "Colombia"
    And I Click on Continue button
    And I select the Select reason "Join partner or family for a long stay"
    And I Click on Continue button
#    And I can verify result "You’ll need a visa to join your family or partner in the UK"








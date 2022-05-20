$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "visaConfirmationTest",
  "description": "As a User I should able to use functinality of visa confirmation",
  "id": "visaconfirmationtest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4776778600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "an Australian Comin To UK For Tourism",
  "description": "",
  "id": "visaconfirmationtest;an-australian-comin-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select the nationality of \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the Select reason \"Tourism\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 95933700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 251378200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 89481500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 214583000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 105608500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 270733700,
  "status": "passed"
});
formatter.after({
  "duration": 742160900,
  "status": "passed"
});
formatter.before({
  "duration": 1818456900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "A Chilean coming to the UK for work and plans on staying for longer than SixMonths",
  "description": "",
  "id": "visaconfirmationtest;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-sixmonths",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select the nationality of \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select the Select reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select intendent to stay for \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select have planning to work for \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can verify result \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 247245800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 70718400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 268073700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 80494300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 280449400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 32
    }
  ],
  "location": "VisaConfirmationSteps.iSelectIntendentToStayFor(String)"
});
formatter.result({
  "duration": 50582400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 303044800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 36
    }
  ],
  "location": "VisaConfirmationSteps.iSelectHavePlanningToWorkFor(String)"
});
formatter.result({
  "duration": 82626200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 300782500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.iCanVerifyResult(String)"
});
formatter.result({
  "duration": 42751500,
  "status": "passed"
});
formatter.after({
  "duration": 698138300,
  "status": "passed"
});
formatter.before({
  "duration": 1833988500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": ".A columbian national coming to the UK Tt join a partner for a longStay they do have an article 10Or20Card",
  "description": "",
  "id": "visaconfirmationtest;.a-columbian-national-coming-to-the-uk-tt-join-a-partner-for-a-longstay-they-do-have-an-article-10or20card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@smoke"
    },
    {
      "line": 27,
      "name": "@sanity"
    },
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I select the nationality of \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select the Select reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 261925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 82556000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 274552700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationSteps.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 118775500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 285109400,
  "status": "passed"
});
formatter.after({
  "duration": 699437300,
  "status": "passed"
});
});
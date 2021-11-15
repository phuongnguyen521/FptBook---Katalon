$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "login Feature",
  "description": "  As a user, I want to login to Cura System\n  so that I can make an appointment.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with a valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I navigate to Cura System homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "I click Make Appointment button",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Log in button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John Doe",
        "ThisIsNotAPassword"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with a valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I navigate to Cura System homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_Cura_System_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Make Appointment button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.I_click_MakeAppointment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username John Doe and password ThisIsNotAPassword",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.I_enter_valid_username_password(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027ThisIsNotAPassword\u0027 of object \u0027Object Repository/CURA/Page_CURA Healthcare Service/input_Password_password\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$2.call(Unknown Source)\r\n\tat LoginSteps.I_enter_valid_username_password(LoginSteps.groovy:64)\r\n\tat ✽.I enter username John Doe and password ThisIsNotAPassword(Include/features/Login.feature:30)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027SE150998\u0027, ip: \u0027192.168.74.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.54 (d31a821ec901f..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51624}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c129fc2553adb287c27646b7543d9939\n*** Element info: {Using\u003dxpath, value\u003d}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy22.findElements(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElements(EventFiringWebDriver.java:182)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementByNormalMethods(WebUiCommonHelper.java:1014)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:909)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:892)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:887)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsByDefault(WebUiCommonHelper.java:883)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsWithSelfHealing(WebUiCommonHelper.java:733)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElements(WebUiCommonHelper.java:718)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1363)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.doCall(SetTextKeyword.groovy:55)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.call(SetTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$2.call(Unknown Source)\r\n\tat LoginSteps.I_enter_valid_username_password(LoginSteps.groovy:64)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Test Demo.run(Test Demo:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:430)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:421)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:400)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:392)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:273)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1636346674655.run(TempTestCase1636346674655.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.I_click_Login_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.I_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
});
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.annotation.TearDown as TearDown
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl('http://fptbookstore.slimair.cool/')

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/a_Login'))

WebUI.setText(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/input_Email_Input.Email'), 'phuongnnse@fpt.edu.vn')

WebUI.setEncryptedText(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/input_Password_Input.Password'), 
    'rBiF04Ek6lW1rw3U6XrRJA==')

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/button_Log in'))

WebUI.delay(3)

WebUI.scrollToElement(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/img_Product'), 10)

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/img_Product'))

WebUI.delay(3)

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/price_Product'))

WebUI.delay(2)

WebUI.setText(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/input_Quantity_AddToCart_The overdue life of army'), 
    '4')

WebUI.delay(2)

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/button_Add to cart'))

WebUI.delay(2)

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/a_Cart(1)'))

WebUI.click(findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/product_Cart'))

WebUI.takeElementScreenshotAsCheckpoint('report_Different_Product_Cart', findTestObject('Fpt_Different_Product_Cart_Repo/Page_Home  FptBookStore/product_Cart'))

@TearDown
def TearDown() {
    WebUI.closeBrowser()
}


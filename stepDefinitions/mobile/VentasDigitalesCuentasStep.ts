import { Given, Then, When } from '@cucumber/cucumber';
import VentasDigitalesPrestamosPage from '../../pages/mobile/VentasDigitalesPrestamosPage';
import VentasDigitalesTarjetasPage from '../../pages/mobile/VentasDigitalesTarjetasPage';
import VentasDigitalesCuentasPage from '../../pages/mobile/VentasDigitalesCuentasPage';



When(/^user Select the digital account option from Solicitud De Productos$/, async () => {
    await VentasDigitalesCuentasPage.validate()
    await VentasDigitalesCuentasPage.clickonCuentasMenu()
});

When(/^on the benefits screen select one of the orange buttons Abrir Cuenta.$/, async () => {
    try {
        await VentasDigitalesCuentasPage.SelectAbrircuentabtn()
        if(await(await VentasDigitalesCuentasPage.continuebtnpopup).isDisplayed())
        {
            browser.takeScreenshot();
            browser.pause(1000);
            (await VentasDigitalesCuentasPage.continuebtnpopup).click();
        }
    } catch (Exception) {
        await VentasDigitalesCuentasPage.SelectAbrircuentabtn2()
    }

});

When(/^On the T&C screen, select the T&C checkbox.$/, async () => {
    await VentasDigitalesCuentasPage.selecttermsandCondition()
});

When(/^Select the Acepto button.$/, async () => {
    try {
        await VentasDigitalesCuentasPage.selectAceptoBtn()
    } catch (Exception) {
        await VentasDigitalesTarjetasPage.VerifyrequirementError()
    }

});

When(/^The user authentication screen is displayed,Enter the token number and then select the Continuar button.$/, async () => {
    try {
        await VentasDigitalesCuentasPage.typeTokenPopular()
        await VentasDigitalesCuentasPage.selectBtnContinuarOnPopularTokenScreen()
    } catch (Exception) {
            await VentasDigitalesCuentasPage.typeTokenPopular2()
    }
});

When(/^On the receipt screen select the option Ir a mis productos.$/, async () => {
        await VentasDigitalesCuentasPage.selectIrMisProductos()

});


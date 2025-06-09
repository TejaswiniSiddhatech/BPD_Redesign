import { Given, Then, When } from '@cucumber/cucumber';
import TransferirEntreMisCuentasPage from '../../pages/mobile/TransferirEntreMisCuentasPage';
import TransferirExpresosPage from '../../pages/mobile/TransferirExpresosPage';


Then(/^the screen of Transferir Entre mis cuentas should displayed$/, async () => {
    await TransferirEntreMisCuentasPage.validate();
});

When(/^user select option Selecciona tu cuenta from Transferir a mis cuentas screen$/, async () => {
    await TransferirEntreMisCuentasPage.validate();
    await TransferirEntreMisCuentasPage.selectSeleccionaCuenta();
});

When(/^user select the account "(.*)" from list of accounts Transferir a mis cuentas screen$/, async (nroCuenta: string) => {
    await TransferirEntreMisCuentasPage.validateSelectAccountScreen();
    await TransferirEntreMisCuentasPage.selectAnAccount(nroCuenta);
});

When(/^user select option Hasta cuenta from Transferir a mis cuentas screen$/, async () => {
    await TransferirEntreMisCuentasPage.selectCuentaDestino();
});

When(/^user select the account "(.*)" from list of Cuenta destino Transferir a mis cuentas screen$/, async (nroCuenta: string) => {
    await TransferirEntreMisCuentasPage.selectAnAccount(nroCuenta);
});

When(/^user enter amount "(.*)" to transfer to a DOP account on Transferir a mis cuentas$/, async (transferAmount: string) => {
    await TransferirEntreMisCuentasPage.enterAmountDOPCurrency(transferAmount);
});

When(/^user enter amount "(.*)" to transfer to a USD account on Transferir a mis cuentas$/, async (transferAmount: string) => {
    await TransferirEntreMisCuentasPage.enterAmountUSDCurrency(transferAmount);
});

When(/^user continue with Transferir a mis cuentas$/, async () => {
    try {
        await TransferirEntreMisCuentasPage.selectBtnContinuar();
    } catch (Exception) {
        try {
            await TransferirEntreMisCuentasPage.selectBtnContinuar();
        } catch (Exception) {
            await TransferirEntreMisCuentasPage.selectBtnContinuar();
        }
    }
});

When(/^user select Si, Transferir from Verificacion - Transferir a mis cuentas screen$/, async () => {

    await TransferirEntreMisCuentasPage.validateVerificacionWithoutDescriptionScreen();
    await TransferirEntreMisCuentasPage.selectSiTransferir();

});

When(/^user select Si, Transferir from Verificacion with description - Transferir a mis cuentas screen$/, async () => {
    await TransferirEntreMisCuentasPage.validateVerificacionWithDescriptionScreen();
    await TransferirEntreMisCuentasPage.selectSiTransferir();

});

When(/^the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir a mis cuentas$/, async () => {

    await TransferirEntreMisCuentasPage.validateVerificacionNoDescriptionMulticurrencyScreen();
    await TransferirEntreMisCuentasPage.validateVerificacionUSDCurrency();
    await TransferirEntreMisCuentasPage.selectSiTransferir();

});

When(/^the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir a mis cuentas$/, async () => {

    await TransferirEntreMisCuentasPage.validateVerificacionNoDescriptionMulticurrencyScreen();
    await TransferirEntreMisCuentasPage.validateVerificacionDOPCurrency();
    await TransferirEntreMisCuentasPage.selectSiTransferir();

});

When(/^user type token popular code for Transferir a mis cuentas$/, async () => {
    await TransferirEntreMisCuentasPage.validateTokenPopularScreen();
    await TransferirEntreMisCuentasPage.typeTokenPopular("321321")

});

When(/^user select continuar on Token Popular screen for Transferir a mis cuentas$/, async () => {
    await TransferirEntreMisCuentasPage.selectBtnContinuarOnPopularTokenScreen();
    // await TransferirEntreMisCuentasPage.validateIsServiceUp();
});

Then(/^the screen of Comprobante for Transferir a mis cuentas should displayed$/, async () => {
    await TransferirEntreMisCuentasPage.validateComprobanteWithoutDescriptionScreen();
});

Then(/^the screen of Comprobante with description for Transferir a mis cuentas should displayed$/, async () => {

    await TransferirEntreMisCuentasPage.validateComprobanteWithtDescriptionScreen();

});

Then(/^the modal with the title "(.*)" should displayed on Transferir a mis cuentas screen$/, async (expectedTitle: string) => {
    //  try {
    const actualTitle = TransferirEntreMisCuentasPage.titleMessage;
    (await (actualTitle)).waitForDisplayed();
    await expect(actualTitle).toHaveAttributeContaining('text', expectedTitle);
    // } catch (Exception) {

    //     await TransferirEntreMisCuentasPage.VerifyServiceInterptionpop();

    // }

});

Then(/^the message "(.*)" should be displayed on Transferir a mis cuentas screen$/, async (expectedBodyMessage: string) => {

    // try {
    const actualBodyMessage = TransferirEntreMisCuentasPage.bodyMessage;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedBodyMessage);
    // } catch (Exception) {

    //     await TransferirEntreMisCuentasPage.VerifyServiceInterptionpop();

    // }

});

When(/^user select Ir a mis productos button on Transferir a mis cuentas screen$/, async () => {
    await TransferirEntreMisCuentasPage.validateComprobanteWithoutDescriptionScreen();
    await TransferirEntreMisCuentasPage.selectIrMisProductos();

});

When(/^user select Realizar otra transferencia button on Transferir a mis cuentas screen$/, async () => {
    await TransferirEntreMisCuentasPage.validateComprobanteWithoutDescriptionScreen();
    await TransferirExpresosPage.selectRealizarOtraTransfer();
});

Then(/^the screen of Comprobante USD Multicurrency should displayed for Transferir a mis cuentas flow$/, async () => {

    await TransferirEntreMisCuentasPage.validateComprobanteMulticurrencyScreenNoDescription();
    await TransferirEntreMisCuentasPage.validateComprobanteUSDCurrency();

});

Then(/^the screen of Comprobante DOP Multicurrency should displayed for Transferir a mis cuentas flow$/, async () => {

    await TransferirEntreMisCuentasPage.validateComprobanteMulticurrencyScreenNoDescription();
    await TransferirEntreMisCuentasPage.validateComprobanteDOPCurrency();

});

Then(/^the error message "(.*)" should be displayed on Transferir a mis cuentas screen$/, async (expectedMessage: string) => {


    //  try {
    let actualBodyMessage = TransferirEntreMisCuentasPage.errorMessage;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedMessage);
    // } catch (Exception) {

    //     await TransferirEntreMisCuentasPage.VerifyServiceInterptionpop();

    // }

});

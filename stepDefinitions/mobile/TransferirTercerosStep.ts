import { Given, Then, When } from '@cucumber/cucumber';
import TransferirTercerosPage from '../../pages/mobile/TransferirTercerosPage';
import TransferirExpresosPage from '../../pages/mobile/TransferirExpresosPage';
import TransferirEntreMisCuentasPage from '../../pages/mobile/TransferirEntreMisCuentasPage';


When(/^user select option Selecciona tu cuenta from Transferir a terceros screen$/, async () => {
    await TransferirTercerosPage.validate();
    await TransferirTercerosPage.selectSeleccionaCuenta();
});

When(/^user select the account "(.*)" from account list on Transferir a terceros screen$/, async (nroCuenta: string) => {
    await TransferirTercerosPage.selectAnAccount(nroCuenta);
});

When(/^user select option Selecciona un beneficiario from Transferir a terceros screen$/, async () => {
    await TransferirTercerosPage.selectSeleccionaBeneficiario();
});

When(/^user select the button Agregar nuevo beneficiario on search beneficiary screen$/, async () => {
    await TransferirTercerosPage.selectAddNewBeneficiary();
});

When(/^user select the button Si, Salir on popup benificiary screen$/, async () => {
    await TransferirTercerosPage.validatePopupBeneficiary();
    await TransferirTercerosPage.selectSiSalir();
});

When(/^user select the button Volver on popup beneficiary screen$/, async () => {
    await TransferirTercerosPage.validatePopupBeneficiary();
    await TransferirTercerosPage.selectVolverBtn();
});

When(/^user select the beneficiary "(.*)" from beneficiary list on Transferir a terceros screen$/, async (beneficiaryAccount: string) => {
    try {
        await TransferirTercerosPage.selectABeneficiary(beneficiaryAccount);
    } catch (Exception) {
        await TransferirTercerosPage.VerifyNoBeneficiarioAvailable();
    }
});

When(/^user enter an amount with USD currency "(.*)" to transfer for Transferir a terceros$/, async (amountTransfer: string) => {

    await TransferirTercerosPage.enterAmountUSDCurrency(amountTransfer);

});

When(/^user enter an amount with DOP currency "(.*)" to transfer for Transferir a terceros$/, async (amountTransfer: string) => {

    await TransferirTercerosPage.enterAmountDOPCurrency(amountTransfer);

});

When(/^user add a description "(.*)" on Transferir a terceros screen$/, async (description: string) => {

    await TransferirTercerosPage.enterDescription(description);

});

When(/^user continue with Transferir a terceros$/, async () => {
    await TransferirTercerosPage.selectBtnContinuar();

});

When(/^user continue with Transferir a terceros without description$/, async () => {

    await TransferirTercerosPage.selectBtnContinuar();

});

When(/^user type token popular code for Transferir a terceros$/, async () => {
    await TransferirTercerosPage.typeTokenPopular("321321");
});

When(/^user select continuar on Token Popular screen for Transferir a terceros$/, async () => {
    await TransferirTercerosPage.selectBtnContinuarOnPopularTokenScreen();
});

When(/^user select Si, Transferir from Verificacion - Transferir a terceros screen$/, async () => {

    await TransferirTercerosPage.validateVerificacionWithDescriptionScreen();
    await TransferirTercerosPage.selectSiTransferir();

});

When(/^user select Si, Transferir from Verificacion without description - Transferir a terceros screen$/, async () => {

    await TransferirTercerosPage.validateVerificacionWithoutDescriptionScreen();
    await TransferirTercerosPage.selectSiTransferir();

});

When(/^the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir a terceros$/, async () => {

    await TransferirTercerosPage.validateVerificacionWithDescriptionMulticurrencyScreen();
    // await TransferirTercerosPage.validateVerificacionUSDCurrency();
    await TransferirTercerosPage.selectSiTransferir();


});

When(/^the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir a terceros$/, async () => {

    await TransferirTercerosPage.validateVerificacionWithDescriptionMulticurrencyScreen();
    //await TransferirTercerosPage.validateVerificacionDOPCurrency();
    await TransferirTercerosPage.selectSiTransferir();


});

When(/^user select Ir a mis productos button on Transferir a terceros screen$/, async () => {

    await TransferirTercerosPage.validateComprobanteScreenWithDescription();
    await TransferirTercerosPage.selectIrMisProductos();


});

When(/^user select Realizar otra transferencia button on Transferir a terceros screen$/, async () => {

    await TransferirTercerosPage.validateComprobanteScreenWithDescription();
    await TransferirTercerosPage.selectRealizarOtraTransferencia();

});

When(/^user search the beneficiary "(.*)" from beneficiary list on Transferir a terceros screen$/, async (beneficiary: string) => {

    await TransferirTercerosPage.validateSearchBeneficiary();
    await TransferirTercerosPage.searchBeneficiary(beneficiary);

});

Then(/^the screen of Comprobante for Transferir a terceros should displayed$/, async () => {

    await TransferirTercerosPage.validateComprobanteScreenWithDescription();
    // await TransferirTercerosPage.selectIrMisProductos();


});

Then(/^the screen of Comprobante for Transferir a terceros without description should displayed$/, async () => {

    await TransferirTercerosPage.validateComprobanteScreenWithoutDescription();
    // await TransferirTercerosPage.selectIrMisProductos();

});

Then(/^the screen of Comprobante USD Multicurrency should displayed for Transferir a terceros flow$/, async () => {

    await TransferirTercerosPage.validateComprobanteMulticurrencyScreenWithDescription();
    // await TransferirTercerosPage.validateComprobanteUSDCurrency();

});

Then(/^the screen of Comprobante DOP Multicurrency should displayed for Transferir a terceros flow$/, async () => {

    await TransferirTercerosPage.validateComprobanteMulticurrencyScreenWithDescription();
    // await TransferirTercerosPage.validateComprobanteDOPCurrency();

});

Then(/^the modal with the title "(.*)" should displayed on Transferir a terceros screen$/, async (expectedTitle: string) => {
    const actualTitle = TransferirTercerosPage.titleMessage;
    (await (actualTitle)).waitForDisplayed();
    await expect(actualTitle).toHaveAttributeContaining('text', expectedTitle);

});

Then(/^the message "(.*)" should be displayed on Transferir a terceros screen$/, async (expectedBodyMessage: string) => {
    const actualBodyMessage = TransferirTercerosPage.bodyMessage;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedBodyMessage);

});

Then(/^the screen of Transferir Cuentas de terceros should displayed$/, async () => {
    await TransferirTercerosPage.validate();

});

Then(/^the screen of select beneficiary should displayed$/, async () => {
    await TransferirTercerosPage.validateSearchBeneficiary();
});

Then(/^the error message "(.*)" should displayed on Transferir a terceros screen$/, async (expectedMessage: string) => {
    let actualMessage = TransferirTercerosPage.errorMsgMontoMinimo;
    (await (actualMessage)).waitForDisplayed();
    await expect(actualMessage).toHaveAttributeContaining('text', expectedMessage);
});
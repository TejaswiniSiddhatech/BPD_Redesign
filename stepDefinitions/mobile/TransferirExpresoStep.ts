import { Given, Then, When } from '@cucumber/cucumber';
import TransferirExpresosPage from '../../pages/mobile/TransferirExpresosPage';
import TransferirEntreMisCuentasPage from '../../pages/mobile/TransferirEntreMisCuentasPage';
import commonsPage from '../../pages/mobile/commonsPage';


When(/^user select option Selecciona tu cuenta from Transferir Expresos screen$/, async () => {
    await TransferirExpresosPage.validate();
    await TransferirExpresosPage.selectSeleccionaCuenta();
});

When(/^user select the account "(.*)" from account list on Transferir Expresos screen$/, async (nroCuenta: string) => {
    await TransferirExpresosPage.selectAnAccount(nroCuenta);
});

When(/^user enter account number "(.*)" of Beneficiario in Transferir Expresos screen$/, async (nroCuenta: string) => {
    await TransferirExpresosPage.enterNroCuenta(nroCuenta);
});

When(/^user enter an amount with DOP currency "(.*)" to transfer for Transferir Expresos$/, async (amountTransfer: string) => {

    await TransferirExpresosPage.validateDOPcurrency();
    await TransferirExpresosPage.enterAmountDOPToTransfer(amountTransfer);
});

When(/^user enter an amount with USD currency "(.*)" to transfer for Transferir Expresos$/, async (amountTransfer: string) => {

    await TransferirExpresosPage.validateUSDcurrency();
    await TransferirExpresosPage.enterAmountUSDToTransfer(amountTransfer);

});

When(/^user enter a description "(.*)" for Transferir Expresos$/, async (description: string) => {

    await TransferirExpresosPage.enterDescription(description);
});

When(/^user continue with Transferir Expresos$/, async () => {
    try {
        await TransferirExpresosPage.selectBtnContinuar();
    } catch (Exception) {

        await TransferirExpresosPage.selectBtnContinuar2();
    }
});

When(/^user select Si, Transferir from Verificacion - Transferir Expresos screen$/, async () => {

    await TransferirExpresosPage.validateVerificacionWithDescriptionScreen();
    await TransferirExpresosPage.selectSiTransferir();

});

When(/^user select Si, Transferir from Verificacion without description - Transferir Expresos screen$/, async () => {

    await TransferirExpresosPage.validateVerificacionWithoutDescriptionScreen();
    await TransferirExpresosPage.selectSiTransferir();

});

When(/^the user select the button Si, Transferir on the USD multicurrency transfer flow for Transferir Expresos$/, async () => {

    await TransferirExpresosPage.validateVerificacionMulticurrencyScreen();
    await TransferirExpresosPage.validateVerificacionUSDCurrency();
    await TransferirExpresosPage.selectSiTransferir();

});

When(/^the user select the button Si, Transferir on the DOP multicurrency transfer flow for Transferir Expresos$/, async () => {

    await TransferirExpresosPage.validateVerificacionMulticurrencyScreen();
    await TransferirExpresosPage.validateVerificacionDOPCurrency();
    await TransferirExpresosPage.selectSiTransferir();

});

When(/^user type token popular code for Transferir Expresos$/, async () => {

    await TransferirEntreMisCuentasPage.validateTokenPopularScreen();
    await TransferirEntreMisCuentasPage.typeTokenPopular("321321")

    // await TransferirExpresosPage.typeTokenPopular("321321");
});

When(/^user select validar token popular on Token Popular screen for Transferir Expresos$/, async () => {
    await TransferirExpresosPage.selectBtnValidarTokenPopular();
});


When(/^user select Ir a mis productos button on Transferir Expresos screen$/, async () => {

    await TransferirExpresosPage.validateComprobanteWithoutDescriptionScreen();
    await TransferirExpresosPage.selectIrMisProductos();

});

When(/^user select Realizar otra transferencia button on Transferir Expresos screen$/, async () => {

    await TransferirExpresosPage.validateComprobanteWithoutDescriptionScreen();
    await TransferirExpresosPage.selectRealizarOtraTransfer();

});


Then(/^Transferir expresos screen should displayed$/, async () => {

    await TransferirExpresosPage.validate();

});

Then(/^the screen of Comprobante without description for Transferir Expresos should displayed$/, async () => {

    await TransferirExpresosPage.validateComprobanteWithoutDescriptionScreen();

});

Then(/^the screen of Comprobante for Transferir Expresos should displayed$/, async () => {

    await TransferirExpresosPage.validateComprobanteWithtDescriptionScreen();


});

Then(/^the screen of Comprobante USD Multicurrency should displayed for Transferir Expresos flow$/, async () => {

    await TransferirExpresosPage.validateComprobanteUSDCurrency();
    await TransferirExpresosPage.validateComprobanteMulticurrencyScreenWithDescription();

});

Then(/^the screen of Comprobante DOP Multicurrency should displayed for Transferir Expresos flow$/, async () => {

    await TransferirExpresosPage.validateComprobanteDOPCurrency();
    await TransferirExpresosPage.validateComprobanteMulticurrencyScreenWithDescription();

});

Then(/^the modal with the title "(.*)" should displayed on Transferir Expresos screen$/, async (expectedTitle: string) => {

    const actualTitle = TransferirExpresosPage.titleMessage;
    (await (actualTitle)).waitForDisplayed();
    await expect(actualTitle).toHaveAttributeContaining('text', expectedTitle);

});

Then(/^the message "(.*)" should be displayed on Transferir Expresos screen$/, async (expectedBodyMessage: string) => {
    const actualBodyMessage = TransferirExpresosPage.bodyMessage;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedBodyMessage);
});

Then(/^the title of the error message "(.*)" should be displayed on Transferir Expresos screen$/, async (expectedTitleMessage: string) => {
    const actualBodyMessage = TransferirExpresosPage.titleErrorMsg;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedTitleMessage);

});

Then(/^the body of the error message "(.*)" should be displayed on Transferir Expresos screen$/, async (expectedBodyMessage: string) => {

    const actualBodyMessage = TransferirExpresosPage.bodyErrorMsg;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedBodyMessage);

});

Then(/^the screen of Transferir Expresos should displayed$/, async () => {

    await TransferirExpresosPage.validate();

});

Then(/^the error message "(.*)" should be displayed on Transferir Expresos screen$/, async (expectedMessage: string) => {
    const actualBodyMessage = TransferirExpresosPage.errorMsgTxtMontoMinimo;
    (await (actualBodyMessage)).waitForDisplayed();
    await expect(actualBodyMessage).toHaveAttributeContaining('text', expectedMessage);
});

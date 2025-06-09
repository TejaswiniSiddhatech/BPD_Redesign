import { Given, Then, When } from '@cucumber/cucumber';
import PagarTarjetaCreditoPage from '../../pages/mobile/PagarTarjetaCreditoPage';
import LoginPage from '../../pages/mobile/LoginPage';
import DashboardPage from '../../pages/mobile/DashboardPage';


When(/^user select Seleccione from desde cuenta option on Pago a Tarjetas de crédito screen$/, async () => {
    await PagarTarjetaCreditoPage.selectSeleccioneDesdeCuentaOpt();
    await PagarTarjetaCreditoPage.validateListAccount();
});

When(/^user select the first account from account list on Pago a Tarjetas de crédito screen$/, async () => {
    await PagarTarjetaCreditoPage.selectFirstAccount();
});

When(/^user select an account "(.*)" from account list on Pago a Tarjetas de crédito screen$/, async (accountNro: string) => {
    await PagarTarjetaCreditoPage.selectAnAccount(accountNro);
});

When(/^user select Seleccione from Tarjetas de crédito option on  Pago a Tarjetas de crédito screen$/, async () => {
    await PagarTarjetaCreditoPage.selectSeleccioneTCOpt();
    await PagarTarjetaCreditoPage.validateListTC();
});

When(/^user select the first credit card from credit cards list on Pago a Tarjetas de crédito screen$/, async () => {
    await PagarTarjetaCreditoPage.selectFirstTC();
});

When(/^user select a credit card "(.*)" from credit card list on Pago a Tarjetas de crédito screen$/, async (creditNro: string) => {
    await PagarTarjetaCreditoPage.selectACreditCard(creditNro);
});


When(/^user select a US credit card "(.*)" from credit card list on Pago a Tarjetas de crédito screen$/, async (nroAccount: string) => {
    await PagarTarjetaCreditoPage.selectACreditCardUS(nroAccount);
});


When(/^user select monto a pagar "(.*)" on Pago a Tarjetas de crédito screen$/, async (montoPagar: string) => {
    await PagarTarjetaCreditoPage.selectMontoPagar(montoPagar);
});

When(/^user enter "(.*)" amount "(.*)" to pay on Pago a Tarjetas de crédito screen$/, async (montoPagar: string, amountToTransfer: string) => {
    await PagarTarjetaCreditoPage.enterAmountToTransfer(montoPagar, amountToTransfer);
});

When(/^user continue the payment of their credit card$/, async () => {
    await PagarTarjetaCreditoPage.selectBtnContinuar();
});

When(/^user select Continuar on Verificacion - Pago a Tarjetas de crédito screen$/, async () => {
    // await PagarTarjetaCreditoPage.validateVerificationScreen();
    // await PagarTarjetaCreditoPage.selectBtnContinuarVerificacion();
    // try {
    //     await PagarTarjetaCreditoPage.selectpopuperror();
    //     await PagarTarjetaCreditoPage.EnterMontoPagar();
    //     await PagarTarjetaCreditoPage.validateVerificationScreen();
    //     await PagarTarjetaCreditoPage.selectBtnContinuarVerificacion();
    // }
    // catch (Exception) {

    await PagarTarjetaCreditoPage.validateVerificationScreen();
    await PagarTarjetaCreditoPage.selectBtnContinuarVerificacion();

    //  }

});

When(/^user select Continuar on Verificacion - Pago a Tarjetas de crédito screen with multicurrency$/, async () => {

    await PagarTarjetaCreditoPage.validateVerificationWithMulticurrencyScreen();
    await PagarTarjetaCreditoPage.selectBtnContinuarVerificacion();

});

When(/^user type code of token popular on Pago a Tarjetas de crédito - Token Popular screen$/, async () => {

    await PagarTarjetaCreditoPage.typeTokenPopular("321321");

});

When(/^user select button Continuar on Pago a Tarjetas de crédito - Token Popular screen$/, async () => {
    await PagarTarjetaCreditoPage.selectContinuarBtnOnTokenScreen();
});

When(/^user select Continuar on Pago a Tarjetas de crédito - Comprobante screen$/, async () => {
    await PagarTarjetaCreditoPage.selectBtnContinuarComprobante();
});

Then(/^the screen of Comprobante on Pago a Tarjetas de crédito should displayed$/, async () => {

    await PagarTarjetaCreditoPage.validateComprobanteScreen();

});

Then(/^the screen of Comprobante on Pago a Tarjetas de crédito multicurrency should displayed$/, async () => {

    await PagarTarjetaCreditoPage.validateComprobanteWithMulticurrencyScreen();

});

Then(/^error message "(.*)" should displayed$/, async (expectedMessage: string) => {
    const actualMessage = await PagarTarjetaCreditoPage.errorMessage;
    await expect(actualMessage).toHaveAttribute('text', expectedMessage);
});

Then(/^the screen of Pagar Tarjetas de credito should displayed$/, async () => {
    await PagarTarjetaCreditoPage.validate();
});



When(/^Select Tarjetas Account From Tarjetas Menu Dashboard$/, async () => {
    await DashboardPage.ValidatefilterTarjetas();
    await PagarTarjetaCreditoPage.selectTarjetaAccountdashboard();
});

When(/^Select option Pagar From Tarjetas Menu Dashboard$/, async () => {
    await PagarTarjetaCreditoPage.selectPagarFromTarjetadashboard();
    await PagarTarjetaCreditoPage.selectPagartarjetaFromTarjetadashboard();
});
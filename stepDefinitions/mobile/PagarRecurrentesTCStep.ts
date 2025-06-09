import { Given, Then, When } from '@cucumber/cucumber';
import PagarRecurrentesTCPage from '../../pages/mobile/PagarRecurrentesTCPage';

When(/^user select the first credit card from Selecciona las tarjetas on Pagos recurrentes a tarjetas screen$/, async () => {
    try {
        await PagarRecurrentesTCPage.validate();
        await PagarRecurrentesTCPage.selectFirstCreditCard();
    } catch (Exception) {

            await PagarRecurrentesTCPage.VerifyNoRecordsFound();
    }

});

When(/^user select Tipo de pago "(.*)" on Pagos recurrentes a tarjetas screen$/, async (tipoPago: string) => {
    await PagarRecurrentesTCPage.selectTipoPago(tipoPago);
});

When(/^user select Fecha de pago "(.*)" on Pagos recurrentes a tarjetas screen$/, async (fechaPago: string) => {
    await PagarRecurrentesTCPage.selectFechaPago(fechaPago);
});

When(/^user continue with Programar pago recurrente a tarjeta$/, async () => {
    await PagarRecurrentesTCPage.selectSiguienteBtn();
});

When(/^user select Selecciona from Selecciona la cuenta option on Pagos recurrentes a tarjetas screen$/, async () => {
    await PagarRecurrentesTCPage.validateSeleccionaCuenta();
    await PagarRecurrentesTCPage.selectSelecciona();
});

When(/^user select the first account from account list on Pagos recurrentes a tarjetas screen$/, async () => {
    await PagarRecurrentesTCPage.selectFirstAccount();
});

When(/^user select Siguiente on Selecciona Cuenta - Pagos recurrentes a tarjetas screen$/, async () => {
    await PagarRecurrentesTCPage.selectSiguienteBtn();
});

When(/^user tap on checkbox from Terminos y condiciones on Verificacion - Pagos recurrentes a tarjetas screen$/, async () => {
    await PagarRecurrentesTCPage.validateVerificationScreen();
    await PagarRecurrentesTCPage.selectChkTerminosCondiciones();
});

When(/^user select Acepto on Verificacion - Pagos recurrentes a tarjetas screen$/, async () => {
    await PagarRecurrentesTCPage.selectAceptoBtn();
});


When(/^user$/, async () => {

});

When(/^user$/, async () => {

});

When(/^user$/, async () => {

});


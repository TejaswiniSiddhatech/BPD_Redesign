import { Given, Then, When } from '@cucumber/cucumber';
import DetalleTransaccionPage from '../../pages/mobile/DetalleTransaccionPage';
import ConsultarCuentaPage from '../../pages/mobile/ConsultarCuentaPage';
import ConsultarPrestamoPage from '../../pages/mobile/ConsultarPrestamoPage';


When(/^user select the option Servicios y reclamaciones$/, async () => {
    await DetalleTransaccionPage.selectServiciosReclamaciones();
});

When(/^user select the complain option "(.*)"$/, async (complainOption:string) => {
    await DetalleTransaccionPage.selectComplainOption(complainOption);
});

Then(/^the screen of Transacciones should displayed$/, async () => {
    await DetalleTransaccionPage.validate();
});

Then(/^the amount should be the same as displayed at the last trasactions of the account$/, async () => {
    const dashboardBalance = await ConsultarCuentaPage.getTransactionAmount();
    const dashboardBalanceToText = dashboardBalance.toString();

    await expect(DetalleTransaccionPage.txtMontoTransaccion).toHaveAttribute('text', dashboardBalanceToText);
});

Then(/^the amount should be the same as displayed at the last trasactions of the loan account$/, async () => {
    const dashboardBalance = await ConsultarPrestamoPage.getTransactionAmount();
    const dashboardBalanceToText = dashboardBalance.toString();

    await expect(DetalleTransaccionPage.txtMontoTransaccion).toHaveAttribute('text', dashboardBalanceToText);
});

Then(/^the complain options should displayed$/, async () => {
    await expect(DetalleTransaccionPage.txtNoReconozcoConsumo).toBeDisplayed();
    await expect(DetalleTransaccionPage.txtDuplicaronConsumo).toBeDisplayed();

});
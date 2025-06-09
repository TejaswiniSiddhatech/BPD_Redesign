import { Given, Then, When } from '@cucumber/cucumber';
import PagarMultiplesTCPage from '../../pages/mobile/PagarMultiplesTCPage';

When(/^user choose the source account "(.*)" on Pagos a tarjetas de creditos$/, async (accountNro: string) => {
    await browser.pause(20000);
    await PagarMultiplesTCPage.validate();
    await PagarMultiplesTCPage.selectSeleccione();
    await PagarMultiplesTCPage.selectAnAccount(accountNro);
});

When(/^user select more than one credit card to pay$/, async () => {
    await PagarMultiplesTCPage.selectFirstTC();
    await PagarMultiplesTCPage.selectSecondTC();
});

// When(/^user tap the option {string} from Pagar dropdown list$/, async (text: string) => {
//     await PagarMultiplesTCPage.selectFirstTC();
// });

When(/^user continue with the payment of the credit cards$/, async () => {
    await PagarMultiplesTCPage.selectContinuarBtn();
});

When(/^user select Continuar on Verificacion - Pagos a tarjetas de creditos screen$/, async () => {
    await PagarMultiplesTCPage.validateVerificationScreen();
    await PagarMultiplesTCPage.selectContinuarBtnOnVerificacionScreen();
});

When(/^user type code of token popular on Pagos a tarjetas de creditos - Token Popular screen$/, async () => {
    await PagarMultiplesTCPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Pagos a tarjetas de creditos - Token Popular screen$/, async () => {
    await PagarMultiplesTCPage.selectContinuarBtnOnTokenScreen();
});

When(/^user select one credit card to pay$/, async () => {
    await PagarMultiplesTCPage.selectFirstTC();
});

When(/^user select the option to select all credit cards$/, async () => {
    await PagarMultiplesTCPage.selectAllTC();
});

Then(/^the screen of Comprobante on Pagos a tarjetas de creditos should displayed$/, async () => {
    await PagarMultiplesTCPage.validateComprobanteScreen();
});

Then(/^the screen of Comprobante with one credit card payment on Pagos a tarjetas de creditos should displayed$/, async () => {
    await PagarMultiplesTCPage.validateComprobanteScreenWithOneCreditCard();
});

Then(/^I can't continue with the payment$/, async () => {
    const btnContinuar = await PagarMultiplesTCPage.btnContinuar;
    await expect(btnContinuar).toBeDisabled();
});

import { Given, Then, When } from '@cucumber/cucumber';
import CodigoCashPage from '../../pages/mobile/CodigoCashPage';

When(/^user select Generar codigo on Codigo cash screen$/, async () => {
    await CodigoCashPage.validate();
    await CodigoCashPage.selectGenerarCodigoBtn();
});

When(/^user select Selecciona from Desde cuenta option on Codigo cash screen$/, async () => {
    await CodigoCashPage.validateGenerarCodigoScreeen();
    await CodigoCashPage.selectSelecciona();
});

When(/^user select first account from account list on Codigo cash screen$/, async () => {
    await CodigoCashPage.validateAccountListScreen();
    await CodigoCashPage.selectFirsAccount();
});

When(/^user enter Cedula del beneficiario "(.*)" on Generar codigo - Codigo cash screen$/, async (cedulaBeneficiaria: string) => {
    await CodigoCashPage.enterCedulaBeneficiario(cedulaBeneficiaria);
});

When(/^user select Continuar on Generar codigo - Codigo cash screen$/, async () => {
    await CodigoCashPage.selectContinuarBtn();
});

When(/^user select Continuar on Verificacion - Codigo cash screen$/, async () => {
    await CodigoCashPage.validateVerificacionScreen();
    await CodigoCashPage.selectContinuarBtnOnVerificacion();
});

When(/^user type code of token popular on Codigo cash - Token Popular screen$/, async () => {
    await CodigoCashPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Codigo cash - Token Popular screen$/, async () => {
    await CodigoCashPage.selectContinuarBtnOnTokenScreen();
});

Then(/^the screen CodigoCash is displayed$/, async () => {
    await CodigoCashPage.validate();
});

When(/^User Select Codigo cash from dashboard cuenta$/, async () => {
    await CodigoCashPage.SelectCodigoCashCuentaDashboard();
});

Then(/^the screen of Comprobante for CodigoCash should displayed$/, async () => {
    await CodigoCashPage.VerifyComprobanteScreen();
});
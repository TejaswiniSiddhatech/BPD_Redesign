import { Given, Then, When } from '@cucumber/cucumber';
import BeneficiarioOtrosBancosPage from '../../pages/mobile/BeneficiarioOtrosBancosPage';

When(/^user select Entidad Financiera option$/, async () => {
    await BeneficiarioOtrosBancosPage.selectEntidadFinanciera();
});

When(/^user search for Entidad "(.*)"$/, async (entidadFinancieraSelected: string) => {
    await BeneficiarioOtrosBancosPage.searchEntidadFinanciera(entidadFinancieraSelected);
});

When(/^user select Entidad Financiera "(.*)"$/, async (entidadFinancieraSelected: string) => {
    await BeneficiarioOtrosBancosPage.selectEntidadFinancieraFromResults(entidadFinancieraSelected);
});

When(/^user select tipo de beneficiario option$/, async () => {
    await BeneficiarioOtrosBancosPage.selectTipoBeneficiarioOption();
});

When(/^user select tipo de beneficiario "(.*)" from Otros Bancos List$/, async (tipoBeneficarioSelected: string) => {
    await BeneficiarioOtrosBancosPage.selectTipoBeneficiarioFromList(tipoBeneficarioSelected);
});

When(/^user enter numero de cuenta "(.*)" from Otros Bancos$/, async (nroCuenta: string) => {
    await BeneficiarioOtrosBancosPage.typeAccountNroOtroBancos(nroCuenta);
});

When(/^user enter documento de identidad "(.*)"$/, async (docIdentidad: string) => {
    await BeneficiarioOtrosBancosPage.typeDocIdentidad(docIdentidad);
});

When(/^user select tipo de documento de identidad "(.*)"$/, async (tipoDocIdentidad: string) => {
    await BeneficiarioOtrosBancosPage.selectTipoDocIdentidad(tipoDocIdentidad);
});

When(/^user enter alias "(.*)" from Otros Bancos$/, async (alias: string) => {
    await BeneficiarioOtrosBancosPage.typeAliasOtrosBancos(alias);
});

When(/^user enter correo "(.*)" from Otros bancos$/, async (correo: string) => {
    await BeneficiarioOtrosBancosPage.typeCorreoOtrosBancos(correo);
});

When(/^user continue with the adition of the beneficiario de otros bancos$/, async () => {

    await BeneficiarioOtrosBancosPage.selectContinarOtroBancos();

});

When(/^user select the checkbox of conditions and terms$/, async () => {

    await BeneficiarioOtrosBancosPage.selectCheckboxTerms();


});

When(/^user select button Continuar on Validacion de datos of Otros Bancos screen$/, async () => {

    await BeneficiarioOtrosBancosPage.selectContinuarBtnValidacionDatos();

});

When(/^user select button Continuar on Verificacion of Otros Bancos screen$/, async () => {

    await BeneficiarioOtrosBancosPage.selectContinuarBtnVerificacionOB();

});

When(/^user type code of token popular on Beneficiario otros bancos Token Popular screen$/, async () => {
    //await BeneficiarioOtrosBancosPage.validateTokenPopularScreen();
    await BeneficiarioOtrosBancosPage.typeTokenPopular("321321");

});

When(/^user select button Continuar on Beneficiario otros bancos Token Popular screen$/, async () => {
    await BeneficiarioOtrosBancosPage.selectBtnContinuarOnPopularTokenScreen();
});

Then(/^the screen of Comprobante for Beneficiario Otros Bancos should displayed$/, async () => {
    await BeneficiarioOtrosBancosPage.validateComprobanteBenefiOtrosBancosScreen();

});
import { Given, Then, When } from '@cucumber/cucumber';
import PagarServiciosFacturasPage from '../../pages/mobile/PagarServiciosFacturasPage';

When(/^user select Seleccione from Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.validate();
    await PagarServiciosFacturasPage.selectSeleccioneOpt();
});

When(/^user select checkbox "(.*)" from Pagos a servicios y facturas screen$/, async (chkSelected: string) => {
    await PagarServiciosFacturasPage.selectCheckbox(chkSelected);
});

When(/^user select the first account from account list of Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.validateAccountList();
    await PagarServiciosFacturasPage.selectFirstAccount();
});

When(/^user select an account "(.*)" from account list of Pagos a servicios y facturas screen$/, async (accountNro:string) => {
    await PagarServiciosFacturasPage.validateAccountList();
    await PagarServiciosFacturasPage.selectAnAccount(accountNro);
});

When(/^user select Seleccione categoria from Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectEligeCategoria();
    await PagarServiciosFacturasPage.validateListCategory();
});

When(/^user select categoria "(.*)" from Pagos a servicios y facturas screen$/, async (categorySelected: string) => {
    await PagarServiciosFacturasPage.selectCategory(categorySelected);
});

When(/^user select Entidad o beneficiario from Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectSeleccioneEntidadBeneficiario();
});

When(/^user select Entidad "(.*)" from Pagos a servicios y facturas screen$/, async (entidadSelected: string) => {
    await PagarServiciosFacturasPage.selectEntidad(entidadSelected);
});

When(/^user enter contract number "(.*)" from Pagos a servicios y facturas screen$/, async (nroContrato: string) => {
    await PagarServiciosFacturasPage.enterNroContract(nroContrato);
});

When(/^user select Verificar from Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectVerificarBtn();
    await PagarServiciosFacturasPage.validateMontoApagar();
});

When(/^user select Continuar on Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectContinuarBtn();
});

When(/^user select Continuar on Verificacion of Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.validateVerificacionScreen();
    await PagarServiciosFacturasPage.selectContinuarVerificacionScreen();
});

When(/^user type code of token popular on Pagar a servicios y facturas Token Popular screen$/, async () => {
    await PagarServiciosFacturasPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Pagar a servicios y facturas Token Popular screen$/, async () => {
    await PagarServiciosFacturasPage.selectContinuarBtnOnTokenScreen();
});

When(/^user select button Cancelar on Pagar a servicios y facturas Token Popular screen$/, async () => {
    await PagarServiciosFacturasPage.selectCancelarBtnOnTokenScreen();
});

When(/^user select Cancelar on Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectCancelarBtn();
});

When(/^user select Cancelar on Verificacion of Pagos a servicios y facturas screen$/, async () => {
    await PagarServiciosFacturasPage.selectCancelarBtnOnVerificacionScreen();
});

When(/^user select button Continuar on Pagar a servicios y facturas Comprobante screen$/, async () => {
    await PagarServiciosFacturasPage.selectContinuarOnComprobanteScreen();
});

Then(/^the screen of Pagos a servicios y facturas should displayed$/, async () => {
    await PagarServiciosFacturasPage.validate();
});

Then(/^the screen of Comprobante for Pagar a servicios y facturas should displayed$/, async () => {
    await PagarServiciosFacturasPage.validateComprobanteScreen();
});
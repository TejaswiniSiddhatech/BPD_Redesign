import { Given, Then, When } from '@cucumber/cucumber';
import BeneficiariosServicioFacturasPage from '../../pages/mobile/BeneficiariosServicioFacturasPage';



When(/^user select the button Adicionar on Beneficiario Servicios y Facturas screen$/, async () => {
    await BeneficiariosServicioFacturasPage.validate();
    await BeneficiariosServicioFacturasPage.selectAdicionarBtn();
});

When(/^user select Seleccione from Categoria on Beneficiario Servicios y Facturas screen$/, async () => {
    await BeneficiariosServicioFacturasPage.selectSeleccioneOpt();
});

When(/^user select a Categoria "(.*)" from list$/, async (categorySelected: string) => {
    await BeneficiariosServicioFacturasPage.selectCategory(categorySelected);
});

When(/^user select Seleccione el nombre de la empresa on Beneficiario Servicios y Facturas screen$/, async () => {
    await BeneficiariosServicioFacturasPage.selectSeleccioneEmpresa();
});

When(/^user select Empresa "(.*)"$/, async (empresaSelected: string) => {
    await BeneficiariosServicioFacturasPage.selectEmpresa(empresaSelected);
});

When(/^user enter numero de contrato "(.*)" on Beneficiario Servicios y Facturas screen$/, async (nroContrato: string) => {
    await BeneficiariosServicioFacturasPage.enterNroContrato(nroContrato);
});

When(/^user enter alias "(.*)" on Beneficiario Servicios y Facturas screen$/, async (alias: string) => {
    await BeneficiariosServicioFacturasPage.enterAlias(alias);
});

When(/^user enter correo electronico "(.*)" on Beneficiario Servicios y Facturas screen$/, async (correoElectronico: string) => {
    await BeneficiariosServicioFacturasPage.enterCorreoElectronico(correoElectronico);
});

When(/^user continue with Beneficiario Servicios y Facturas$/, async () => {
    await BeneficiariosServicioFacturasPage.selectContinuarBtn();

});

When(/^user select Continuar on Verificacion - Beneficiario Servicios y Facturas$/, async () => {

    await BeneficiariosServicioFacturasPage.validateVerificacionScreen();
    await BeneficiariosServicioFacturasPage.selectContinuarBtnVerificacionScreen();


});

When(/^user type code of token popular on Beneficiario Servicios y Facturas Token Popular screen$/, async () => {
    // await BeneficiariosServicioFacturasPage.typeTokenPopular("321321");
    await BeneficiariosServicioFacturasPage.typeTokenPopular("321321");
});

When(/^user select button Continuar on Beneficiario Servicios y Facturas Token Popular screen$/, async () => {
    await BeneficiariosServicioFacturasPage.selectBtnContinuarOnPopularTokenScreen();
});

// When(/^user$/, async () => {

// });

// When(/^user$/, async () => {

// });

// When(/^user$/, async () => {

// });

Then(/^the screen of Comprobante for Beneficiario Servicios y Facturas should displayed$/, async () => {
    await BeneficiariosServicioFacturasPage.validateComprobanteScreen();

});



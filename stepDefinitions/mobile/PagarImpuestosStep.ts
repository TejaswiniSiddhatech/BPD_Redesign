import { Given, Then, When } from '@cucumber/cucumber';
import PagarImpuestosPage from '../../pages/mobile/PagarImpuestosPage';

When(/^user select Selecciona from Institución beneficiaria on Pagos de impuestos screen$/, async () => {
    await PagarImpuestosPage.validate();
    await PagarImpuestosPage.selectSeleccionaInstitucionBeneficiaria();
});

When(/^user select Institución beneficiaria "(.*)" from list on Pagos de impuestos screen$/, async (institucionBeneficiaria: string) => {
    await PagarImpuestosPage.validateInstitucionBeneficiariaList();
    await PagarImpuestosPage.selectABeneficiaryInstitution(institucionBeneficiaria);
});

When(/^user enter Numero de referencia "(.*)" on Pagos de impuestos screen$/, async (nroReferencia: string) => {
    await PagarImpuestosPage.enterNroReferenciaORnc(nroReferencia);
});

When(/^user continue with the payment of taxes$/, async () => {
    await PagarImpuestosPage.selectContinuarBtn();
});

When(/^user select Selecciona from Desde cuenta option on Pagos de impuestos screen$/, async () => {
    await PagarImpuestosPage.validateVerMasDetalleScreen();
    await PagarImpuestosPage.selectSeleccionaDesdeCuenta();
});

When(/^user select first account from account list on Pagos de impuestos screen$/, async () => {
    await PagarImpuestosPage.selectFirstAccount();
});

When(/^user select Continuar on Detalle - Pagos de impuestos screen$/, async () => {
    await PagarImpuestosPage.selectContinuarBtn();
});

When(/^user select Continuar on Confirmacion - Pagos de impuestos screen$/, async () => {
    // await PagarImpuestosPage.validateConfirmacionScreen();
    // await PagarImpuestosPage.selectContinuarBtnOnConfirmacion();
    try {
        await PagarImpuestosPage.validateConfirmacionScreen();
        await PagarImpuestosPage.selectContinuarBtnOnConfirmacion();
    }
    catch (Exception) {
        await PagarImpuestosPage.selectpopuperror();
        await PagarImpuestosPage.selectdesdeacc2();
        // await PagarImpuestosPage.selectSeleccionaDesdeCuenta();
        await PagarImpuestosPage.validateConfirmacionScreen();
        await PagarImpuestosPage.selectContinuarBtnOnConfirmacion();
    }
});

When(/^user select Continuar on Comprobante - Pagos de impuestos screen$/, async () => {
    try {
        await PagarImpuestosPage.selectpopuperror();
        await PagarImpuestosPage.selectdesdeacc2();
        // await PagarImpuestosPage.selectSeleccionaDesdeCuenta();
        await PagarImpuestosPage.validateConfirmacionScreen();
        // await PagarImpuestosPage.selectContinuarBtnOnConfirmacion();
    }
    catch (Exception) {
        await PagarImpuestosPage.selectBtnContinuarComprobante();

    }
});

When(/^user$/, async () => {

});

When(/^user$/, async () => {

});

Then(/^the screen of Comprobante on Pagos de impuestos should displayed$/, async () => {
    try {
        await PagarImpuestosPage.selectpopuperror();
        await PagarImpuestosPage.selectdesdeacc2();
        // await PagarImpuestosPage.selectSeleccionaDesdeCuenta();
        await PagarImpuestosPage.validateConfirmacionScreen();
        await PagarImpuestosPage.selectContinuarBtnOnConfirmacion();
    }
    catch (Exception) {
        await PagarImpuestosPage.validateComprobanteScreen();

    }



});

Then(/^the screen of Pagar Impuestos should displayed$/, async () => {
    await PagarImpuestosPage.validate();
});


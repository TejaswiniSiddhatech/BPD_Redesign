import { Given, Then, When } from '@cucumber/cucumber';
import GestionarTarjetasPage from '../../pages/mobile/GestionarTarjetasPage';

When(/^user select first credit card to configure on Gestionar Tarjetas screen$/, async () => {
    await GestionarTarjetasPage.validate();
    await GestionarTarjetasPage.selectFirstTC();
});

When(/^user select an option to manage "(.*)" on Gestionar Tarjetas screen$/, async (managementOption: string) => {
    await GestionarTarjetasPage.validateOpcionesConfigurarScreen();
    await GestionarTarjetasPage.selectOptionToManage(managementOption);
});

Then(/^the informative message should displayed on Gestionar Tarjetas screen$/, async () => {
    await GestionarTarjetasPage.validateMsg();
});

When(/^user Verify Cambiar fecha de pago y corte page$/, async () => {
    await GestionarTarjetasPage.validateCambiarFechaPagoCorte();
    await GestionarTarjetasPage.selectcreditcardCambiarFechaPagoCorte();
    await GestionarTarjetasPage.verifypopupmsgCambiarFechaPagoCorte();


});

When(/^user Verify Configurar restricciones page$/, async () => {
    try {
        await GestionarTarjetasPage.verifyrequirementerror();
        await GestionarTarjetasPage.verifyrestriccionspage();
    }
    catch (Exception) {
        await GestionarTarjetasPage.verifyrestriccionspage();
    }

});

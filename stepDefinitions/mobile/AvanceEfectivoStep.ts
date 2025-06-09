import { Given, Then, When } from '@cucumber/cucumber';
import AvanceEfectivoPage from '../../pages/mobile/AvanceEfectivoPage';

When(/^user tap desde tarjeta search$/, async () => {
        await AvanceEfectivoPage.selectDesdeTarjetaSearch();
});

When(/^user select a credit card from list$/, async () => {
        await AvanceEfectivoPage.selectACreditCard();
});

When(/^user tap hasta cuenta search$/, async () => {

        await AvanceEfectivoPage.selectHastaCuentaSearch();
});

When(/^user select an account from list$/, async () => {
        await AvanceEfectivoPage.selectAnAccount();
});

When(/^user type an amount "(.*)"$/, async (montoAvance: string) => {
        await AvanceEfectivoPage.typeMontoOfAvance(montoAvance);
});

When(/^user continue with avance de efectivo$/, async () => {
        await AvanceEfectivoPage.selectBtnContinuarOnAFscreen();

});


When(/^user tap the option Avance de efectivo from dashboard Tarjeta$/, async () => {
        await AvanceEfectivoPage.SelectAvanceEfectivodashboard();
});
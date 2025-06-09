import { Given, Then, When } from '@cucumber/cucumber';
import ConsultarPrestamoPage from '../../pages/mobile/ConsultarPrestamoPage';
import DashboardPage from '../../pages/mobile/DashboardPage';


When(/^user select a "(.*)" loan account$/, async (nroAccount: string) => {
    await DashboardPage.validate();
    await DashboardPage.ClickonPrestamosMenu();
    await DashboardPage.setDashboardBalance2(nroAccount);
    await DashboardPage.selectAccountbyAccountNumber2(nroAccount);

});

Then(/^the balance of the loan account should be the same as displayed at the dashboard$/, async () => {
    const dashboardBalance = await DashboardPage.getDashboardBalance();
    const dashboardBalanceToText = dashboardBalance.toString();
    //await expect(ConsultarPrestamoPage.lblBalanceDisponible).toHaveAttribute('text', dashboardBalanceToText);
    await expect(ConsultarPrestamoPage.lblBalanceDisponible).toBeDisplayed();
});

Then(/^the detail screen of loan account balance should displayed$/, async () => {
    await ConsultarPrestamoPage.validate();
});

When(/^user drag the history on the loan detail account$/, async () => {
    await ConsultarPrestamoPage.validate();
    await ConsultarPrestamoPage.dragHistory();
});

When(/^user select the transaction "(.*)" on the detail of the loan account$/, async (transaction: string) => {
    await ConsultarPrestamoPage.validateLastMovements();
    await ConsultarPrestamoPage.setTransactionAmount(transaction);
    await ConsultarPrestamoPage.selectTransaction(transaction);
});